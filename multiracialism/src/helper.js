function importAll(r) {
  const images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

export const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
export const childImages = importAll(require.context('./img/child', false, /\.(png|jpe?g|svg)$/));
export const motherImages = importAll(require.context('./img/mother', false, /\.(png|jpe?g|svg)$/));
export const fatherImages = importAll(require.context('./img/father', false, /\.(png|jpe?g|svg)$/));

// export default {images, childImages};
