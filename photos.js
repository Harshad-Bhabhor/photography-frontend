fetch("https://strapi123.onrender.com/api/photos?populate=*")

  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("gallery")

    data.data.forEach(item => {
      const img = document.createElement("img")
      img.src = "https://strapi123.onrender.com" + item.attributes.image.data.attributes.url
      container.appendChild(img)
    })
  })
