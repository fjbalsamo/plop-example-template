module.exports = function (plop) {
  plop.setGenerator("tempalte", {
    description: "this is a template example",
    prompts: [
      {
        type: "input",
        name: "appName",
        message: "Ingresa el nombre de tu sitio web",
        default: "my-app",
      },
      {
        type: "list",
        name: "cssLib",
        message: "Selecciona una librería CSS",
        choices: [
          { name: "Bootstrap", value: "bootstrap" },
          { name: "Materialize", value: "material" },
        ],
        default: 0,
      },
      {
        type: "input",
        name: "text",
        message: "Ingresa un texto cualquiera para completar tu app",
        validate: (text) => {
          if (text.trim().length == 0) {
            return Promise.reject("Este campo es obligatorio");
          } else {
            return true;
          }
        },
      },
    ],
    actions: (data) => {
      data.isBootstrap = data.cssLib == "bootstrap";
      return [
        {
          destination: "dist",
          templateFiles: data.filename || "template/**/*",
          globOptions: {
            dot: true,
          },
          force: true,
          type: "addMany",
          base: "template",
        },
      ];
    },
  });
};
