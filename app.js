// const container = document.getElementById('root');
// const ajax = new XMLHttpRequest();
// const content = document.createElement('div');
// const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
// const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

// function getData(url) {
//   ajax.open('GET', url, false);
//   ajax.send();

//   return JSON.parse(ajax.response);
// }

// const newsFeed = getData(NEWS_URL);
// const ul = document.createElement('ul');

// window.addEventListener('hashchange', function() {
//   const id = location.hash.substr(1);

//   const newsContent = getData(CONTENT_URL.replace('@id', id))

//   container.innerHTML = `
//     <h1>${newsContent.title}</h1>

//     <div>
//       <a href="#">목록으로</a>
//     </div>
//   `;
// });

// const newsList = [];

// newsList.push('<ul>');

// for(let i = 0; i < 10; i++) {
//   newsList.push(`
//     <li>
//       <a href="#${newsFeed[i].id}">
//         ${newsFeed[i].title} (${newsFeed[i].comments_count})
//       </a>
//     </li>
//   `);
// }

// newsList.push('</ul>');

// container.innerHTML = newsList.join('');

const ajax = new XMLHttpRequest();
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json' 
const container = document.createElement("ul")

const getData =(url) =>{
  ajax.open('GET',url, false )
  ajax.send()
  return JSON.parse(ajax.response)
}

const getNewsFeed=()=>{
  const newsFeed = getData(NEWS_URL)
  const mapResult = newsFeed.map(item => `<li><a href=#${item.id}><h1>${item.title}</h1>(${item.comments_count})</a></li>`)
  document.getElementById("root").innerHTML = mapResult
}

const getNewsPage=()=>{
  const id = location.hash.substring(1)
  const results = getData(CONTENT_URL.replace("@id", id))
  document.getElementById("root").innerHTML = ""
  document.getElementById("root").append(container)
  container.append(results.title)
}

const getRouter =()=>{
  const route = location.hash
  if(route === ""){
    getNewsFeed()
  }else{
    getNewsPage()
  }
}

window.addEventListener("hashchange", getRouter)
getRouter()



