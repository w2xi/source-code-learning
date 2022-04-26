// obtain DOM element name of top 3
function getTop3Dom(){
  const elements = Array.from(document.querySelectorAll('*'))
  const counts = {}

  for (const elem of elements) {
    const tagName = elem.tagName

    counts[tagName] = (counts[tagName] || 0) + 1
  }

  const sorted = Object.entries(counts).sort((a, b) => {
    return b[1] - a[1]
  })

  return sorted.slice(0, 3).map(item => item[0])
}

getTop3Dom()

// limit: only use document.querySelector
function getTop3Dom2(){
  const html = document.querySelector('html')
  const counts = {}

  function scan(parent){
    const tagName = parent.tagName
    counts[tagName] = (counts[tagName] || 0) + 1

    for (const item of parent.children){
      scan(item)
    }
  }

  scan(html)

  const sorted = Object.entries(counts).sort((a, b) => {
    return b[1] - a[1]
  })

  return sorted.slice(0, 3).map(item => item[0])
}

getTop3Dom2()