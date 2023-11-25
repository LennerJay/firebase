

<template>
  

</template>

<script setup>
import { db } from './firebase'
import {getDocs, collection, onSnapshot,addDoc,orderBy,query, serverTimestamp,doc, deleteDoc,updateDoc, getDoc } from "firebase/firestore";
import {ref, onMounted} from 'vue'


const notes = ref([])

const getData = async ()=>{

      let notesCollection = await getDocs(collection(db,'notes'))
      notesCollection.forEach(note =>{
        notes.value.push(note.data())
      })
     
      console.log(notes.value)
}


onMounted(async()=>{
  await getData()
});

</script>
