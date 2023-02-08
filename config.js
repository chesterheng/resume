module.exports = {
  pdf_options: {
    format: "A4",
    margin: "20mm",
    printBackground: true,
    headerTemplate: `
      <span class="title" style="display: none;"></span>
    `,
    footerTemplate: `
      <style>
        div { 
          font-family: arial, sans-serif; 
          font-size: 8px;
          width: 100%;
          text-align: center; 
        }
      </style>
      <div>
        Page <span class="pageNumber"></span>
        of <span class="totalPages"></span>
      </div>
    `,
  },
  body_class: "markdown-body",
  css: `
    .markdown-body {
      font-family: arial, sans-serif;
      font-size: 12px; 
    }
  `,
  stylesheet_encoding: "utf-8",
};
