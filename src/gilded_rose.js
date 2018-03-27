class Item { // cannot alter //
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}


// Conjured” items --- degrade in Quality twice as fast as normal items (no tick!) Need to implement !
// Once the sell by date has passed, Quality degrades twice as fast (tick)
// The Quality of an item is never negative (tick)
// The Quality of an item is never more than 50
// The Quality of an item -1 each day (tick)
// Each day sell by date reduces by 1 (tick)



class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {     // can change this method //
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;    // decreases Conjured, dexterity vest, mongoose item quality by 1
            if (this.items[i].name === 'Conjured Mana Cake') {
              this.items[i].quality = this.items[i].quality - 1;
            }
          }
        }
      } else {      // if aged brie or backstage
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1; // both aged brie and backstage + 1 quality
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') { // if backstage etc
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1; // reduces the sell by date of all apart from Sulfuras by 1
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1; // If Conjured, dexterity vest, mongoose, + sell by date < 0 + quality > 0, -1 to quality
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality; // if backstage + quality > 0 + sell by date < 0
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1; // if Aged Brie + quality < 50 + sell by date < 0
          }
        }
      }
    }

    return this.items;
  }
}

// Item quality -1
// Sell by date -1
// Item quality if < 0 sell by date -1
//