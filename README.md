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



## Prerequisites

What things you need to install the software and how to install them

Give examples


## Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

Give the example

And repeat

until finished

End with an example of getting some data out of the system or using it for a little demo


## Running the tests

Explain how to run the automated tests for this system


## Break down into end to end tests

Explain what these tests test and why

Give an example


## And coding style tests

Explain what these tests test and why

Give an example


## Built With

    Dropwizard - The web framework used
    Maven - Dependency Management
    ROME - Used to generate RSS Feeds


## Authors

Joshua Holloway

(Legacy code cloned from https://github.com/emilybache/GildedRose-Refactoring-Kata) 