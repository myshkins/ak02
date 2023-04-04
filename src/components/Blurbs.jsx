const blurbs = {
  airboo: [
    `My brother and I wanted to collaborate on a project, and us both being 
    environmentalists at heart, we decided to build an air quality monitoring 
    app. The end goal is to create a platform where users can compare air 
    quality measurments they personally took with air quality data provided by 
    government agencies. We first started with building the data pipeline and 
    data visualization tool that you see linked here. We opted to use Apache 
    Airflow to orchestrate our ELT data pipeline. Our api is built with FastAPI, 
    and the front end is rendered with React. Click `, 
    <a href="https://airboo.ak0.io">here</a>,
    ` to see the app, or the `,
    <a href="https://github.com/myshkins/airboo">Github repo</a>,
    ` for this project.`
  ],
  petwatch: [
    `The inspiration for this project came from Chancho the chinchilla. He's a 
    15 year old chinchilla who is very particular about the climate around him. 
    Chinchillas generally don't tolerate temperatures outside the range of 60-75 
    degrees Farenheit. Thus, I created this app as a way to monitor the 
    temperature of the apartment when my partner and I are away. I used a 
    Raspberry Pi with a temperature sensor to get the temperature data, which 
    is then posted to my database via my api. The app then pulls the data to 
    render a webpage with a view of the data. The tech stack includes Flask, 
    Postgres, MySQLAlchemy, Docker, Gunicorn, and Nginx. It's deployed on my 
    personal VPS. Click `,
    <a href="https://pet-watch.ak0.io">here</a>,
    ` to see the app, or the `,
    <a href="https://github.com/myshkins/pet-watch">Github repo</a>,
    ` for this project.`
  ],
  blog: [
    `I built a blog for recording all of the things I learn as I develop 
    projects. It's build with Flask, Postgres, and SQLAlchemy, and it's deployed 
    with Nginx, Gunicorn, and Docker. Check out the site `,
    <a href="https://blog.ak0.io">here</a>,
    " or see the ",
    <a href="https://github.com/myshkins/ak0_blog">Github repo</a>, "."
  ]
}

export default blurbs