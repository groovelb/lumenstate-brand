/**
 * Hex 색상을 RGB 객체로 변환
 * @param {string} hex - Hex 색상 (#RRGGBB)
 * @returns {Object} { r, g, b }
 */
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * RGB 객체를 Hex 색상으로 변환
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @returns {string} Hex 색상 (#RRGGBB)
 */
const rgbToHex = (r, g, b) => {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = Math.round(x).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
};

/**
 * 두 색상 사이를 선형 보간
 * @param {string} color1 - 시작 색상 (Hex)
 * @param {string} color2 - 종료 색상 (Hex)
 * @param {number} t - 보간 값 (0-1)
 * @returns {string} 보간된 색상 (Hex)
 */
export const interpolateColor = (color1, color2, t) => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) {
    return color1; // 변환 실패 시 첫 번째 색상 반환
  }

  // 0-1 범위로 클램핑
  const clampedT = Math.max(0, Math.min(1, t));

  // 선형 보간
  const r = rgb1.r + (rgb2.r - rgb1.r) * clampedT;
  const g = rgb1.g + (rgb2.g - rgb1.g) * clampedT;
  const b = rgb1.b + (rgb2.b - rgb1.b) * clampedT;

  return rgbToHex(r, g, b);
};
