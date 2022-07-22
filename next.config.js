module.exports = {
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { 
        fs: false,
        bycrpt:false,
        path:false
       };
  
      return config;
    },
  };