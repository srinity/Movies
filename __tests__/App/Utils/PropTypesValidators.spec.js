import * as PropTypesValidators from '../../../App/Utils/PropTypesValidators'

describe('PropTypesValidators helpers', () => {
  describe('isHexColorCode method', () => {
    it('should return true for valid hex code colors', () => {
      expect(PropTypesValidators.isHexColorCode('#fff')).toBeTruthy()
      expect(PropTypesValidators.isHexColorCode('#ffffff')).toBeTruthy()
      expect(PropTypesValidators.isHexColorCode('#000')).toBeTruthy()
      expect(PropTypesValidators.isHexColorCode('#000000')).toBeTruthy()
      expect(PropTypesValidators.isHexColorCode('#888')).toBeTruthy()
      expect(PropTypesValidators.isHexColorCode('#888888')).toBeTruthy()
    })

    it('should return false for invalid hex code colors', () => {
      expect(PropTypesValidators.isHexColorCode('fff')).toBeFalsy()
      expect(PropTypesValidators.isHexColorCode('ffffff')).toBeFalsy()
      expect(PropTypesValidators.isHexColorCode('#0000000')).toBeFalsy()
      expect(PropTypesValidators.isHexColorCode('#xxx')).toBeFalsy()
      expect(PropTypesValidators.isHexColorCode('')).toBeFalsy()
      expect(PropTypesValidators.isHexColorCode('#8888')).toBeFalsy()
      expect(PropTypesValidators.isHexColorCode('red')).toBeFalsy()
      expect(PropTypesValidators.isHexColorCode('rgb(0, 2, 3)')).toBeFalsy()
      expect(PropTypesValidators.isHexColorCode(undefined)).toBeFalsy()
      expect(PropTypesValidators.isHexColorCode(null)).toBeFalsy()
      expect(PropTypesValidators.isHexColorCode(2)).toBeFalsy()
      expect(PropTypesValidators.isHexColorCode({})).toBeFalsy()
      expect(PropTypesValidators.isHexColorCode([])).toBeFalsy()
      expect(PropTypesValidators.isHexColorCode(() => {})).toBeFalsy()
    })
  })

  describe('isRGBColor method', () => {
    it('should return true for valid rgb colors', () => {
      expect(PropTypesValidators.isRGBColor('rgb(255, 255, 255)')).toBeTruthy()
      expect(PropTypesValidators.isRGBColor('rgb(125,125,125)')).toBeTruthy()
      expect(PropTypesValidators.isRGBColor('rgb(0, 0, 0)')).toBeTruthy()
    })

    it('should return false for invalid rgb colors', () => {
      expect(PropTypesValidators.isRGBColor('rgb(0, 0, -1)')).toBeFalsy()
      expect(PropTypesValidators.isRGBColor('rgb(0, 0, 256)')).toBeFalsy()
      expect(PropTypesValidators.isRGBColor('rgb(0, 0, 0, 0)')).toBeFalsy()
      expect(PropTypesValidators.isRGBColor('rgp(0, 0, 0)')).toBeFalsy()
      expect(PropTypesValidators.isRGBColor('rgba(0, 0, 0, 0)')).toBeFalsy()
      expect(PropTypesValidators.isRGBColor('#888')).toBeFalsy()
      expect(PropTypesValidators.isRGBColor('red')).toBeFalsy()
      expect(PropTypesValidators.isRGBColor('')).toBeFalsy()
      expect(PropTypesValidators.isRGBColor(undefined)).toBeFalsy()
      expect(PropTypesValidators.isRGBColor(null)).toBeFalsy()
      expect(PropTypesValidators.isRGBColor(2)).toBeFalsy()
      expect(PropTypesValidators.isRGBColor({})).toBeFalsy()
      expect(PropTypesValidators.isRGBColor([])).toBeFalsy()
      expect(PropTypesValidators.isRGBColor(() => {})).toBeFalsy()
    })
  })

  describe('isRGBAColor method', () => {
    it('should return true for valid rgba colors', () => {
      expect(
        PropTypesValidators.isRGBAColor('rgba(255, 255, 255, 1)')
      ).toBeTruthy()
      expect(
        PropTypesValidators.isRGBAColor('rgba(125,125,125, 0.5)')
      ).toBeTruthy()
      expect(PropTypesValidators.isRGBAColor('rgba(0, 0, 0, 0.0)')).toBeTruthy()
    })

    it('should return false for invalid rgb colors', () => {
      expect(PropTypesValidators.isRGBAColor('rgba(0, 0, 0, -1)')).toBeFalsy()
      expect(
        PropTypesValidators.isRGBAColor('rgba(255, 255, 255, 2)')
      ).toBeFalsy()
      expect(PropTypesValidators.isRGBAColor('rgba(256, 0, 0, 0)')).toBeFalsy()
      expect(PropTypesValidators.isRGBAColor('rgpa(0, 0, 0, 0)')).toBeFalsy()
      expect(PropTypesValidators.isRGBAColor('rgba(0, 0, 0, 0)')).toBeFalsy()
      expect(PropTypesValidators.isRGBAColor('rgb(0, 0, 0)')).toBeFalsy()
      expect(PropTypesValidators.isRGBAColor('#888')).toBeFalsy()
      expect(PropTypesValidators.isRGBAColor('red')).toBeFalsy()
      expect(PropTypesValidators.isRGBAColor('')).toBeFalsy()
      expect(PropTypesValidators.isRGBAColor(undefined)).toBeFalsy()
      expect(PropTypesValidators.isRGBAColor(null)).toBeFalsy()
      expect(PropTypesValidators.isRGBAColor(2)).toBeFalsy()
      expect(PropTypesValidators.isRGBAColor({})).toBeFalsy()
      expect(PropTypesValidators.isRGBAColor([])).toBeFalsy()
      expect(PropTypesValidators.isRGBAColor(() => {})).toBeFalsy()
    })
  })

  describe('isHSLColor method', () => {
    it('should return true for valid hsl colors', () => {
      expect(
        PropTypesValidators.isHSLColor('hsl(360, 100%, 100%)')
      ).toBeTruthy()
      expect(PropTypesValidators.isHSLColor('hsl(180,50%,50%)')).toBeTruthy()
      expect(PropTypesValidators.isHSLColor('hsl(0, 0%, 0%)')).toBeTruthy()
    })

    it('should return false for invalid hsl colors', () => {
      expect(PropTypesValidators.isHSLColor('hsl(-1, 0%, 0%)')).toBeFalsy()
      expect(PropTypesValidators.isHSLColor('hsl(361, 0%, 0%)')).toBeFalsy()
      expect(PropTypesValidators.isHSLColor('hsl(0, 120%, 0%)')).toBeFalsy()
      expect(PropTypesValidators.isHSLColor('hsl(0, -10%, 0%)')).toBeFalsy()
      expect(PropTypesValidators.isHSLColor('hsl(0, 0%, 120%)')).toBeFalsy()
      expect(PropTypesValidators.isHSLColor('hsl(0, 0%, -10%)')).toBeFalsy()
      expect(PropTypesValidators.isHSLColor('rgb(0, 0, 0)')).toBeFalsy()
      expect(PropTypesValidators.isHSLColor('rgba(0, 0, 0, 1)')).toBeFalsy()
      expect(PropTypesValidators.isHSLColor('#888')).toBeFalsy()
      expect(PropTypesValidators.isHSLColor('red')).toBeFalsy()
      expect(PropTypesValidators.isHSLColor('')).toBeFalsy()
      expect(PropTypesValidators.isHSLColor(undefined)).toBeFalsy()
      expect(PropTypesValidators.isHSLColor(null)).toBeFalsy()
      expect(PropTypesValidators.isHSLColor(2)).toBeFalsy()
      expect(PropTypesValidators.isHSLColor({})).toBeFalsy()
      expect(PropTypesValidators.isHSLColor([])).toBeFalsy()
      expect(PropTypesValidators.isHSLColor(() => {})).toBeFalsy()
    })
  })

  describe('isHSLAColor method', () => {
    it('should return true for valid hsla colors', () => {
      expect(
        PropTypesValidators.isHSLAColor('hsla(360, 100%, 100%, 1)')
      ).toBeTruthy()
      expect(
        PropTypesValidators.isHSLAColor('hsla(180,50%,50%, 0.5)')
      ).toBeTruthy()
      expect(
        PropTypesValidators.isHSLAColor('hsla(0, 0%, 0%, 0.0)')
      ).toBeTruthy()
    })

    it('should return false for invalid hsla colors', () => {
      expect(PropTypesValidators.isHSLAColor('hsla(-1, 0%, 0%, 0)')).toBeFalsy()
      expect(
        PropTypesValidators.isHSLAColor('hsla(361, 0%, 0%, 0)')
      ).toBeFalsy()
      expect(
        PropTypesValidators.isHSLAColor('hsla(0, 120%, 0%, 0)')
      ).toBeFalsy()
      expect(
        PropTypesValidators.isHSLAColor('hsla(0, -10%, 0%, 0)')
      ).toBeFalsy()
      expect(
        PropTypesValidators.isHSLAColor('hsla(0, 0%, 120%, 0)')
      ).toBeFalsy()
      expect(
        PropTypesValidators.isHSLAColor('hsla(0, 0%, -10%, 0)')
      ).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor('hsla(0, 0%, 0%, -1)')).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor('hsla(0, 0%, 0%, 2)')).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor('hsl(0, 0%, 0%)')).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor('rgb(0, 0, 0)')).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor('rgba(0, 0, 0, 1)')).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor('#888')).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor('red')).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor('')).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor(undefined)).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor(null)).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor(2)).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor({})).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor([])).toBeFalsy()
      expect(PropTypesValidators.isHSLAColor(() => {})).toBeFalsy()
    })
  })

  describe('isColor method', () => {
    it('should return true for undefined, hex, rgb, rgba, hsl and hsla', () => {
      expect(PropTypesValidators.isColor(undefined)).toBeTruthy()
      expect(PropTypesValidators.isColor('#000')).toBeTruthy()
      expect(PropTypesValidators.isColor('rgb(0, 0, 0)')).toBeTruthy()
      expect(PropTypesValidators.isColor('rgba(0, 0, 0, 1)')).toBeTruthy()
      expect(PropTypesValidators.isColor('hsl(0, 0%, 0%)')).toBeTruthy()
      expect(PropTypesValidators.isColor('hsla(0, 0%, 0%, 1)')).toBeTruthy()
    })

    it('should return false for undefined, hex, rgb, rgba, hsl and hsla', () => {
      expect(PropTypesValidators.isColor('')).toBeFalsy()
      expect(PropTypesValidators.isColor(null)).toBeFalsy()
      expect(PropTypesValidators.isColor({})).toBeFalsy()
      expect(PropTypesValidators.isColor([])).toBeFalsy()
      expect(PropTypesValidators.isColor(() => {})).toBeFalsy()
    })
  })

  describe('colorPropType method', () => {
    it('should return true for undefined, hex, rgb, rgba, hsl and hsla', () => {
      const propName = 'iconColor'
      const componentName = 'VFButton'

      expect(
        PropTypesValidators.colorPropType(
          { [propName]: undefined },
          propName,
          componentName
        )
      ).toBeUndefined()
      expect(
        PropTypesValidators.colorPropType(
          { [propName]: '#000' },
          propName,
          componentName
        )
      ).toBeUndefined()
      expect(
        PropTypesValidators.colorPropType(
          { [propName]: 'rgb(0, 0, 0)' },
          propName,
          componentName
        )
      ).toBeUndefined()
      expect(
        PropTypesValidators.colorPropType(
          { [propName]: 'rgba(0, 0, 0, 1)' },
          propName,
          componentName
        )
      ).toBeUndefined()
      expect(
        PropTypesValidators.colorPropType(
          { [propName]: 'hsl(0, 0%, 0%)' },
          propName,
          componentName
        )
      ).toBeUndefined()
      expect(
        PropTypesValidators.colorPropType(
          { [propName]: 'hsla(0, 0%, 0%, 1)' },
          propName,
          componentName
        )
      ).toBeUndefined()
    })

    it('should return false for undefined, hex, rgb, rgba, hsl and hsla', () => {
      const propName = 'iconColor'
      const componentName = 'VFButton'

      let errorType = new Error(
        `Invalid prop ${propName} passed to component ${componentName}, invalid color value.\nValue passed "" expected a valid hex, rgb, rgba, hsl, hsla or a valid RN color name.`
      )

      expect(
        PropTypesValidators.colorPropType(
          { [propName]: '' },
          propName,
          componentName
        )
      ).toEqual(errorType)

      errorType = new Error(
        `Invalid prop ${propName} passed to component ${componentName}, invalid color value.\nValue passed "null" expected a valid hex, rgb, rgba, hsl, hsla or a valid RN color name.`
      )

      expect(
        PropTypesValidators.colorPropType(
          { [propName]: null },
          propName,
          componentName
        )
      ).toEqual(errorType)

      errorType = new Error(
        `Invalid prop ${propName} passed to component ${componentName}, invalid color value.\nValue passed "[object Object]" expected a valid hex, rgb, rgba, hsl, hsla or a valid RN color name.`
      )

      expect(
        PropTypesValidators.colorPropType(
          { [propName]: {} },
          propName,
          componentName
        )
      ).toEqual(errorType)

      errorType = new Error(
        `Invalid prop ${propName} passed to component ${componentName}, invalid color value.\nValue passed "" expected a valid hex, rgb, rgba, hsl, hsla or a valid RN color name.`
      )

      expect(
        PropTypesValidators.colorPropType(
          { [propName]: [] },
          propName,
          componentName
        )
      ).toEqual(errorType)
    })
  })
})
