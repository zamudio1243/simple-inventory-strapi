module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9a74d2d92fe1d05e24823d3eac978659'),
  },
});
