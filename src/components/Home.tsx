import { Grid } from '@mui/material';
import React from 'react';
import { Body1, H1 } from './Typographies';

export const Home = () => {
  return (
    <Grid container flex={'flex'} alignContent={'center'} direction={'column'}>
      <H1 text={"John's Story Spot"}/>
      {/* desktop image sized container */}
      <Grid container flex={'flex'} marginTop={'1rem'}>
        {/* left page, a component to extract */}
        <Grid container flex={'flex'} direction={'column'} width={'50%'} paddingLeft={'2.5rem'} paddingRight={'1.5rem'}>
          <Body1 text={"Left page is where, in English, the whole thing gets started. It's wild, it's crazy, it is absolutely a crazy time."} />
          <Body1 text={"People will arrive at the left page and be absolutely sucked into some sort of crazy adventure and never want to leave."} />
          <Body1 text={"We will learn the characters, both the heroes and the villains. If we're lucky, there will be a dog or a cat we can form an absolutely unhinged parasocial relationship with. If we're very, very lucky."} />
          <Body1 text={"Every once in a while, there will be some foreshadowy type conflict to let us know it won't always be happy times in the Shire."} />
          <Body1 text={"By the time we reach the end of the left page, we should be well invested in the characters and their journey; even if it has not yet truly begun."} />
          <Body1 text={"Right page is where the action gets continued. It's where an Act 2 happens, it's where we see the danger, the sadness."} />
          <Body1 text={"Or in our case right now, it's where I'll explain what the hell is going on."} />
        </Grid>
        {/* right page, another component to extract */}
        <Grid container flex={'flex'} direction={'column'} width={'50%'} paddingLeft={'1.5rem'} paddingRight={'2.5rem'}>
          <Body1 text={"This is a placeholder for a new website where I'm going to combine the technical skillz and the writing skillz in one place. I'm going to self publish some writing in the most ass way possible!"} />
          <Body1 text={"The home page won't always look like this -- I'm just trying to identify what the actual reading pages should look like. So. Bear with me while I hammer out all the nitty gritty details like how many words can reasonably fit on one of these pages."} />
          <Body1 text={"HEY MAKE ME RESPONSIVE"} />
        </Grid>
      </Grid>
    </Grid>
  );
}
