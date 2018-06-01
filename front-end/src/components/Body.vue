<template>
  <v-container fluid>
    <v-layout row>
  <v-form>
    <v-select
    :items="technology"
    v-model="technologyInput"
    label="Technology"
    data-vv-name="select"
    required
    ></v-select>
    <v-text-field
      v-model="title"
      :counter="10"
      label="Title"
      required
    ></v-text-field>
    <v-text-field
      v-model="text1"
      :counter="10"
      label="Text1"
      required
    ></v-text-field>
    <v-text-field
      v-model="image1"
      :counter="10"
      label="Image1"
      required
    ></v-text-field>
    <v-text-field
      v-model="text2"
      :counter="10"
      label="Text2"
      required
    ></v-text-field>
    <v-text-field
      v-model="image2"
      :counter="10"
      label="Image2"
      required
    ></v-text-field>
    <v-text-field
      v-model="text3"
      :counter="10"
      label="Text3"
      required
    ></v-text-field>
    <v-btn @click="createPostButton" color="success">Create</v-btn>
 </v-form>
 <v-form>
   <v-text-field
     v-model="name"
     :counter="10"
     label="Name"
     required
   ></v-text-field>
   <v-text-field
     v-model="phone"
     :counter="10"
     label="Phone"
     required
   ></v-text-field>
   <v-text-field
     v-model="email"
     :counter="10"
     label="Email"
     required
   ></v-text-field>
   <v-btn @click="createContactButton" color="success">Create</v-btn>
  </v-form>




<v-layout fill-height align-content-center>
  <v-flex offset-sm2>
  <v-card v-if="previewPost">
        <div>
          <v-form>
          <div class="headline">Post</div>
          <div class="subtitle">{{currentPost.id}}</div>
          <span class="grey--text">{{currentPost.technology}} </span>
          <v-select
          :items="technology"
          v-model="updateTechnologyInput"
          label="Update Technology"
          data-vv-name="select"
          required
          ></v-select>
          <span class="grey--text">{{currentPost.title}} </span>
          <v-text-field
            v-model="updateTitle"
            :counter="10"
            label="Update Title"
            required
          ></v-text-field>
          <span class="grey--text">{{currentPost.text1}}</span>
          <v-text-field
            v-model="updateText1"
            :counter="10"
            label="Update Text1"
            required
          ></v-text-field>
          <img :src="currentPost.image1">
          <v-text-field
            v-model="updateImage1"
            :counter="10"
            label="Update Image1"
            required
          ></v-text-field>
          <span class="grey--text">{{currentPost.text2}}</span>
          <v-text-field
            v-model="updateText2"
            :counter="10"
            label="Update Text2"
            required
          ></v-text-field>
          <img :src="currentPost.image2">
          <v-text-field
            v-model="updateImage2"
            :counter="10"
            label="Update Image2"
            required
          ></v-text-field>
          <span class="grey--text">{{currentPost.text3}}</span>
          <v-text-field
            v-model="updateText3"
            :counter="10"
            label="Update Text3"
            required
          ></v-text-field>
        </v-form>
        </div>
          <v-btn @click="putPostData(currentPost.id)" color="yellow">Update</v-btn>
  </v-card>
</v-flex>
<v-flex>
  <v-card v-if="previewContact">
        <div>
          <div class="headline">Contact</div>
          <div class="subtitle">{{currentContact.id}}</div>
          <span class="grey--text">{{currentContact.Name}} </span>
          <v-text-field
            v-model="updateName"
            :counter="10"
            label="Update Name"
            required
          ></v-text-field>
          <span class="grey--text">{{currentContact.Phone}} </span>
          <v-text-field
            v-model="updateEmail"
            :counter="10"
            label="Update Email"
            required
          ></v-text-field>
          <span class="grey--text">{{currentContact.Email}}</span>
          <v-text-field
            v-model="updatePhone"
            :counter="10"
            label="Update Phone"
            required
          ></v-text-field>
              <v-btn @click="putContactData(currentContact.id)" color="yellow">Update</v-btn>
        </div>
  </v-card>
</v-flex>
</v-layout>





 <v-layout>
 <v-flex offset-sm4>
   <v-card  v-for="contact in contact" :key="contact.id + 'contact'">
     <v-card-title  primary-title>
       <div>
         <div class="headline">Contact</div>
         <div class="subtitle">{{contact.id}}</div>
         <span class="grey--text">{{contact.Name}} </span>
         <span class="grey--text">{{contact.Phone}} </span>
         <span class="grey--text">{{contact.Email}}</span>
       </div>
     </v-card-title>
     <v-card-text>
     </v-card-text>
     <v-card-actions>
  <v-btn @click="previewContactButton(contact.id)" flat>Edit</v-btn>
  <v-btn @click="deleteContactData(contact.id)" flat color="red">Delete</v-btn>
  </v-btn>
</v-card-actions>
   </v-card>
   <v-card @click="test" v-for="post in posts" :key="post.id">
     <v-card-title primary-title>
       <div>
         <div class="headline">Post</div>
         <div class="subtitle">{{post.id}}</div>
         <span class="grey--text">{{post.technology}} </span>
         <span class="grey--text">{{post.title}} </span>
         <span class="grey--text">{{post.text1}}</span>
         <img :src="post.image1">
         <span class="grey--text">{{post.text2}}</span>
         <img :src="post.image2">
         <span class="grey--text">{{post.text3}}</span>
       </div>
     </v-card-title>
     <v-card-text>
     </v-card-text>
     <v-card-actions>
  <v-btn @click="previewPostButton(post.id)" flat>Edit</v-btn>
  <v-btn @click="deletePostData(post.id)" flat color="red">Delete</v-btn>
  </v-btn>
</v-card-actions>
   </v-card>
 </v-flex>
</v-layout>



</v-layout>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Form',
  mounted() {
    //LIST
    axios.get(this.postsUrl)
      .then(response => {
        this.posts = response.data.post
      })
      .catch(function (error) {
        console.log(error)
      })
      axios.get(this.contactUrl)
      .then(response => {
        this.contact = response.data.contact
        console.log(this.contact)
      })
        .catch(function (error) {
          console.log(error)
        })
    },
  data: () => ({
    postsUrl: "https://pacific-river-81946.herokuapp.com/mySite/posts",
    contactUrl: "https://pacific-river-81946.herokuapp.com/mySite/contact",
    previewPost: false,
    previewContact: false,
    currentPreview: {},
    currentContact: {},
    currentPost: {},
    technology: ["HTML", "CSS", "JavaScript", "Vue.js", "Node.js", "Express"],
    posts: [],
    technologyInput: '',
    title: '',
    text1: '',
    image1: '',
    text2: '',
    image2: '',
    text3: '',
    contact: [],
    name: '',
    email: '',
    phone: '',
    //Post
    updateTechnologyInput: '',
    updateTitle: '',
    updateText1: '',
    updateImage1: '',
    updateText2: '',
    updateImage2: '',
    updateText3: '',
    // updatePostObject: {
    //   technology: this.updateTechnologyInput,
    //   title: this.updateTitle,
    //   text1: this.updateText1,
    //   image1: this.updateImage1,
    //   text2: this.updateText2,
    //   image2: this.updateImage2,
    //   text3: this.updateText3
    // },
    //update Contact
    updateName: '',
    updateEmail: '',
    updatePhone: '',
    // updateContactObject: {
    //   Name: this.updateName,
    //   Email: this.updateEmail,
    //   Phone: this.updatePhone
    // }
  }),
    //EmptyData
  methods: {
    test() {
        console.log(event.target)
    },
    previewPostButton(id) {
      this.previewPost = true
      this.previewContact = false
      this.currentPost = this.posts.filter(post => post.id === id)[0]
      var currentPost = this.posts.filter(post => post.id === id)[0]
      this.updateTechnologyInput = currentPost
      this.updateTitle = currentPost.title
      this.updateText1 = currentPost.text1
      this.updateImage1 = currentPost.image1
      this.updateText2 = currentPost.text2
      this.updateImage2 = currentPost.image2
      this.updateText3 = currentPost.text3
    },
    previewContactButton(id) {
      this.previewContact = true
      this.previewPost = false
      this.currentContact = this.contact.filter(contact => contact.id === id)[0]
      var currentContact = this.contact.filter(contact => contact.id === id)[0]
      console.log(currentContact)
      this.updateName = currentContact.Name
      this.updateEmail = currentContact.Email
      this.updatePhone = currentContact.Phone
    },
    createContactButton() {
      this.postForm("https://pacific-river-81946.herokuapp.com/mySite/contact", {
        Name: this.name,
        Phone: this.phone,
        Email: this.email
      })
    },
    createPostButton() {
      this.postForm("https://pacific-river-81946.herokuapp.com/mySite/posts", {
        technology: this.technology,
        title: this.title,
        text1: this.text1,
        image1: this.image1,
        text2: this.text2,
        image2: this.image2,
        text3: this.text3
      })
    },
   deletePostData(item) {
     //Delete
    return fetch(this.postsUrl + '/' + item, {
      method: 'delete'
    })
   .then(location.reload())
  },
  deleteContactData(item) {
    //Delete
   return fetch(this.contactUrl + '/' + item, {
     method: 'delete'
   })
   .then(location.reload())
 },
  putContactData(id) {
    //Update
    fetch(this.contactUrl + '/' + id, {
  method: 'PUT', //
  body: JSON.stringify({
    id: id,
    Name: this.updateName,
    Email: this.updateEmail,
    Phone: this.updatePhone
  }), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(location.reload())
},
putPostData(id) {
  //Update
  fetch(this.postsUrl + '/' + id, {
    method: 'PUT', // or 'PUT'
    body: JSON.stringify({
      id: id,
      technology: this.updateTechnologyInput,
      title: this.updateTitle,
      text1: this.updateText1,
      image1: this.updateImage1,
      text2: this.updateText2,
      image2: this.updateImage2,
      text3: this.updateText3
}), // data can be `string` or {object}!
headers:{
  'Content-Type': 'application/json'
}
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(location.reload())
},
postForm(url, object) {
  axios.post(url, object)
  .then(function (response) {
    location.reload()
  })
  .catch(function (error) {
    console.log(error)
  })
}
  }
}

</script>
<style scoped>

</style>
