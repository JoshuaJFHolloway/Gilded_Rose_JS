describe("Gilded Rose", function() {

  const gildedRose = new Shop([ new Item("Conjured Mana Cake", 3, 6) ]);
  const items = gildedRose.items;

  it("should foo", function() {
    expect(items[0].name).toEqual("Conjured Mana Cake");
  });


  describe("Conjured Mana Cake", function() {

    let gildedRose;
    let items;

    beforeEach(function(){
      gildedRose = new Shop([ new Item("Conjured Mana Cake", 3, 6) ]);
      items = gildedRose.items;
    });

    it("should degrade in quality by 2 points every day", function() {
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(4)
    });

    it("degrade the quality by 4 over two days", function() {
      gildedRose.updateQuality();
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2)
    });
  });

});
