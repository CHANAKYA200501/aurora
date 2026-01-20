function computeIndices(ndvi, swir) {
  return {
    NDVI: ndvi,
    BSI: swir,
    MAI: (1 - ndvi) * swir
  };
}

module.exports = { computeIndices };