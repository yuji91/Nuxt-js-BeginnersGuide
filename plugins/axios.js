export default function ({ $axios }) {
  $axios.onRequest((config) => {
    console.log(process.env.QIITA_TOKEN);
    if (process.env.QIITA_TOKEN){
      // Text page 43 : without Bearer raise 401 error
      // config.headers.common['Authorization'] = process.env.QIITA_TOKEN
      config.headers.common['Authorization'] = `Bearer ${process.env.QIITA_TOKEN}`
      console.log(config);
    }
    return config
  })
}
