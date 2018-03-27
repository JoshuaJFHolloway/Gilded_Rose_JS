# Gilded Rose Kata

This kata required me to alter a fictional companies legacy code. This company was called Gilded Rose. My task was to add a new feature to their system so that their team can begin selling a new category of items.
This new feature was “Conjured” items. They degrade in 'Quality' twice as fast as normal items.


## Context

All items have a SellIn value which denotes the number of days that Gilded Rose have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day Gilded Rose's system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert


## What am I allowed to modify in the legacy code?

I can make any changes to the UpdateQuality method and add any new code as long as everything still works correctly.
However, I am not allowed to alter the Item class or Items property as those belong to the goblin in the corner who will
insta-rage and one-shot me as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."


## How I approached this kata

The first thing I did was familiarise myself with what the code does. I read through all the files
and digested and understood how they communicate with each other. Afterwards I had a look
at the test files. By understanding the functions and testing setup I gave myself a good foundation to thinking
about how to implement the new feature. I also annotated the code with my comments to help me
remember what code was doing when looking back at it.

After considering where this new feature would go I decided to add tests to further my 
understanding of what the code is doing. This was to check that the Conjured Mana Cake (the new item
that the company wants me to add) would decrease by -2 quality each day before sell by date. And then after
sell by date it needed to decrease by -4. I wrote tests for both of these outcomes and then
edited the code to what I believed would achieve this. The tests passed and the features were integrated. 

I will be looking to extract the logic into clear functions and out of the 
spaghetti if else vortex in the future. But for the time I used this exercise to
practise my ability to read legacy code and understand what it was doing before 
implementing and integrating new features successfully.


## How to use

Nothing to install

1. Clone repo
2. Open TexttestFixture.html to see code run successfully with new addition 'Conjured Mana Cake' 


## Running the tests

1. Open SpecRunner in browser to see tests pass


## Break down into end to end tests

The tests test that Conjure Mana Cake was successfully integrated into the existing 
codebase. As the code I added is separate from the existing code it does not
interact with the other items and their features. I am aware of the interconnected nature
of the if vortex of code and would be wary of implementing such a strategy in the future.
This is because the code could be connected beyond ways I understand, hence ideally
I would test all the other items to make sure they aren't impacted by my additions.
This is something I will do when I have more time, however the legacy code is 
quite simple and being short on time meant that I didn't focus on thoroughness. 

Despite these issues, I plan on returning to this to extract the code from the spaghetti
to make it cleaner and easier to read. The only reason I didn't do this originally is because
its a skill I know I can already do so I'd rather move on from this kata and start the other
two that Makers has set for me this week to complete. The two proceedings tech tests 
are on skills I feel I need to improve upon. Hence why I'd rather spend more time on 
them than this (at this precise moment in time)!


## Authors

Joshua Holloway

(Legacy code cloned from https://github.com/emilybache/GildedRose-Refactoring-Kata) 