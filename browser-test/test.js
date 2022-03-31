describe("@esm-bundle/angular__forms", () => {
  ["es2015", "es2020"].forEach((ecma) => {
    it(`can load the System.register ${ecma} bundle`, async () => {
      const m = await System.import(
        `/base/system/${ecma}/ivy/angular-forms.js`
      );
      expect(m.FormBuilder).toBeDefined();
    });

    it(`can load the System.register ${ecma} prod bundle`, async () => {
      const m = await System.import(
        `/base/system/${ecma}/ivy/angular-forms.min.js`
      );
      expect(m.FormBuilder).toBeDefined();
    });
  });
});
