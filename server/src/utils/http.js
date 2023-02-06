import fetch from 'node-fetch';

const apiURL = 'https://internate.org/wp-json/wp/v2/posts/'

export async function fetchData() {
    console.log('fetch blogs from wordpress API')
    try {
      const responseText = await (await fetch(apiURL)).text()
      //the API returns a mix of HTML and JSON therefore the HTML must be cut out 
      const responseJsonString = '[{'+ responseText.split(' [{')[1]
      return JSON.parse(responseJsonString)
    } catch(error) {
      console.log(error)
    }

}