const api="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"

const inp=document.getElementById('inp')
const images = document.querySelector('.images')

const getImage= async() =>{
  const methods ={
    method:"POST",
    headers:{
      "Content-Type": "application/json",
       "Authorization":`Bearer ${api}`
    },
    body:JSON.stringify(
      {
        "prompt":inp.value,
        "n":3,
        "size": "256x256"
      }
    )
  }

  const res = await fetch("https://api.openai.com/v1/images/generations",methods)
  const data = await res.json()
  console.log(data)
  const listImages=data.data;
  listImages.map(photo =>{
    const container=document.createElement("div")
    images.append(container)
    const img=document.createElement("img")
    images.append(img)
    img.src=photo.url
  })
};