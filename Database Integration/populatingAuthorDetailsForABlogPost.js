const { name } = require('ejs');
const mongoose = require('mongoose');

// ✅ Step 1: Connect to MongoDB Atlas (Update URI with your credentials)
const MONGO_URI = 'mongodb+srv://MyTasksDB:projectMytask_db@cluster0.jxpdwwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Step 2: Define the Author Schema
const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
});
const Author = mongoose.model('Author', authorSchema);


// ✅ Step 3: Define the BlogPost Schema
const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }
})

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// ✅ Step 4: Create sample data
async function createSampleData() {
  console.log('\n--- Creating Sample Author and BlogPost ---');
  try {
    await Author.deleteMany({});
    await BlogPost.deleteMany({});

    const author = new Author({
      name: 'Jane Writer',
      bio: 'Loves to write about Node.js and Mongoose.'
    });
    const savedAuthor = await author.save();
    console.log('✅ Author created:', savedAuthor.name);

    const post = new BlogPost({
      title: 'Understanding Mongoose Population',
      content: 'A deep dive into how population works.',
      author: savedAuthor._id
    });
    const savedPost = await post.save();
    console.log('✅ BlogPost created:', savedPost.title, 'with author ID:', savedPost.author);

    return savedPost._id;
  } catch (error) {
    console.error('❌ Error creating sample data:', error);
  }
}

// ✅ Step 5: Fetch BlogPost WITHOUT population
async function fetchPostWithoutPopulation(postId) {
  console.log('\n--- Fetching BlogPost WITHOUT Population ---');
  try {
    const post = await BlogPost.findById(postId);
    if (post) {
      console.log('📄 Title:', post.title);
      console.log('🆔 Author (ObjectId):', post.author);
    } else {
      console.log('BlogPost not found.');
    }
  } catch (error) {
    console.error('❌ Error fetching without population:', error);
  }
}

// ✅ Step 6: Fetch BlogPost WITH population
async function fetchPostWithPopulation(postId) {
  console.log('\n--- Fetching BlogPost WITH Population ---');
  try {
    // write code to populate blog post with its author.
    const post = await BlogPost.findById(postId).populate('author');
    if (post) {
      console.log('📄 Title:', post.title);
      console.log('👤 Author (Full Object):', post.author);
      console.log('📝 Author Name:', post.author.name);
      console.log('📚 Author Bio:', post.author.bio);
    } else {
      console.log('BlogPost not found.');
    }
  } catch (error) {
    console.error('❌ Error fetching with population:', error);
  }
}

// ✅ Step 7: Run it all
async function runExample() {
  const postId = await createSampleData();
  if (postId) {
    await fetchPostWithoutPopulation(postId);
    await fetchPostWithPopulation(postId);
  }

  mongoose.disconnect()
    .then(() => console.log('\n✅ Disconnected from MongoDB Atlas'))
    .catch(err => console.error('❌ Disconnect error:', err));
}

runExample();
