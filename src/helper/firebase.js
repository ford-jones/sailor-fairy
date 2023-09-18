import axios from 'axios'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { ref, getDownloadURL, listAll, uploadBytesResumable } from 'firebase/storage'

const key = process.env.REACT_APP_FIREBASE_API_KEY
const domain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
const project = process.env.REACT_APP_FIREBASE_PROJECT_ID
const bucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
const sender = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
const app = process.env.REACT_APP_FIREBASE_APP_ID
const measurement = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID

export function configureFirebase() {
    const config = {
        apiKey: `${key}`,
        authDomain: `${domain}`,
        projectId: `${project}`,
        storageBucket: `${bucket}`,
        messagingSenderId: `${sender}`,
        appId: `${app}`,
        measurementId: `${measurement}`
    }
    const fileStorage = initializeApp(config)

    return getStorage(fileStorage)
}

//  Fetches data from firebase
//  Example call: fetchData(FIREBASE_FLASH_IMAGE_DIR, 'flash-images', 'image')
//  relevantDir = firebase target location path prefix, e.g. images/flash/
//  storeName = localStorage store name
//  objectKey = Name of object key associated with returned url value
export function fetchData(relevantDir, storeName, objectKey) {
    const bufferContent = []
    const storageRef = ref(configureFirebase(), relevantDir)
          
    listAll(storageRef).then((result) => {
        console.log(`\x1b[32m result: ${typeof result} \x1b[37m`, result)
      result.items.forEach((data) => {
        getDownloadURL(data)
        .then((url) => {
          console.log(`\x1b[32m url: ${typeof url} \x1b[37m`, url)
          bufferContent.push({[objectKey]: url})
        })
        .then(() => {
          localStorage.setItem(storeName, JSON.stringify(bufferContent))
        })
        .catch((err) => {
          console.error(err)
          console.trace()
        })
      })
    })

    console.log(`\x1b[32m relevantDir: ${typeof relevantDir} \x1b[37m`, relevantDir)
    console.log(`\x1b[32m storeName: ${typeof storeName} \x1b[37m`, storeName)
    console.log(`\x1b[32m objectKey: ${typeof objectKey} \x1b[37m`, objectKey)
    console.log(`\x1b[32m bufferContent: ${typeof bufferContent} \x1b[37m`, bufferContent)
}

//  Uploads data to firebase
//  Example call: uploadData(FIREBASE_FLASH_IMAGE_DIR, 'flash-images', 'image')
//  relevantDir = firebase target location path prefix, e.g. images/flash/
//  filename = name of the file being uploaded
//  file = the actual file data / event.target.files[0]
//  type = the filetype, e.g. 'image/*'
export function uploadData(relevantDir, filename, file, type) {
    const storageRef = ref(configureFirebase(), `${relevantDir}${filename}`)

    uploadBytesResumable(storageRef, file, {contentType: type})
    .then(() => {
      alert(`${filename} added!`)
    }).then(() => {
      window.location.reload()
    })
    .catch((err) => {
      console.error(err.message)
      console.trace()
    })
}
