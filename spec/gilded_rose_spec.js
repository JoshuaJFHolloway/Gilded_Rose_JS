describe("Gilded Rose", function() {

  const gildedRose = new Shop([ new Item("Conjured Mana Cake", 3, 6) ]);
  const items = gildedRose.items;

  it("should contain the item 'Conjured Mana Cake", function() {
    expect(items[0].name).toEqual("Conjured Mana Cake");
  });


  describe("Conjured Mana Cake", function() {

    let gildedRose;
    let items;

    beforeEach(function(){
      gildedRose = new Shop([ new Item("Conjured Mana Cake", 3, 20) ]);
      items = gildedRose.items;
    });

    it("should degrade in quality by 2 points every day", function() {
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(18)
    });

    it("should degrade the quality by 4 points over two days", function() {
      gildedRose.updateQuality();
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(16)
    });

    it("should degrade the quality by 4 points every day after sell by date < 0", function() {
      gildedRose.updateQuality(); // 18 // 2
      gildedRose.updateQuality(); // 16 // 1
      gildedRose.updateQuality(); // 14 // 0
      gildedRose.updateQuality(); // 10 // -1
      gildedRose.updateQuality(); // 6 // -2
      gildedRose.updateQuality(); // 2 // -3
      expect(items[0].sellIn).toEqual(-3);
      expect(items[0].quality).toEqual(2);
    });

  });

});
