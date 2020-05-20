# Brad Arnst CV
This is a project that serves multiple purposes.
- I need a CV. I'd like it online. I wanted it to be easily updated.
- I wanted to get some practical experiences with static website generators&mdash;using the [Jamstack](https://jamstack.org/).
- I believe that [Markdown](https://www.markdownguide.org/) is an efficient, flexible, easily-integrated method/language for cross-platform use and wanted to showcase it's use.
  
## Tools, Platforms
- Written using Markdown and HTML as templates in [Eleventy](https://www.11ty.dev/), a simple, Javascript-based static website generator. It can be zero-config, but is very flexible. It has support for many template languages and can be enhanced and optimised easily with Javascript filters, plugins, etc.
- All content is written in Markdown. Nearly 100% vanilla.
- Developed using [Sass](https://sass-lang.com/) (SCSS).
- [Parcel](https://parceljs.org/) as a web app bundler. Although it's overkill right now as I'm currently only using it for CSS transformation and minifying. But, I'm using Parcel as I may want to do more in the future.
- The CSS transformation and minifying is via [PostCSS](https://postcss.org/). Which (above) is called via Parcel.
- [Font Awesome](https://fontawesome.com/) for icons.
- [Google Fonts](https://fonts.google.com/).
  
## Deployment
- Deployed to an AWS S3 bucket, configured as a static website. In order to get a speedy website and use HTTPS, I deploy to AWS Cloudfront. Cloudfront is Amazon's Content Delivery Network (CDN). The only way for anyone to actually get to the website is via the CDN&mdash;the S3 bucket website is secured.
- I've also tested a automatic deployment from his github repo to Netlify (https://www.netlify.com/). It works, and I may switch away from AWS to Netlify in the future. Or, perhaps do both. Since, I'm not using it for production, I've only got a Netlify website for now. [https://wizardly-clarke-be58be.netlify.app/](https://wizardly-clarke-be58be.netlify.app/).

## Todo
- If I continue to use AWS S3 and Cloudfront for my website I will eventually use a continuous integration/deployment tool. Probably [Travis CI](https://travis-ci.com/).
- I'm not sure about my colour palette. That may change.
- Get a better photo.
- Develop this as a fully-documented, generic CV project on github. There's not a lot to change. It's mostly just documentation.