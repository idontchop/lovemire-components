import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import RadioSelection from "../components/RadioSelection";
import "../theme/style";

let choice = false

// old styled components theme
export const Standard =  {
  colors: {
      // abstract
      primary: "#ebe6e6", // pinkish
      primary2: "#CAB5B5", // heavier pink
      secondary: "#707070", // dark gray
      tertiary: "#D4D4D4", // light gray
      text: "#282c34",
      test: 'purple',

      // specific
      background: "#e8e8e8",
      secondaryBackground: "#f5f5f5",
      title: "#707070",
      button: "#c9a5a5",
      buttonSelected: "#fffafa",
      p: "#86888B",
      selected: "#cab5b5",
      unselected: "#707070",
      selectedHighlight: "#c9a5a5",
      unselectedHighlight: "white",

      // per element
      //inputBackground: this.colors.primary
  },
  borders: {
      primary: "2px #ebe6e6 solid",
      secondary: "1px #86888B solid",
      navButton: "2px gray solid",
      button: "2px gray outset",
      expandableMenu: "2px #707070 solid",
      insideMenu: "2px #707070 solid"
  },
  fonts: {
      title: "'Merriweather',serif",
      titleScript: "Ink Free, serif",
      subtitle: "'Segoe UI','Roboto',serif",
      bio: "'Roboto',serif",
      button: "'Roboto',serif",
      p: "'Roboto', serif"
  }
}

export default {
  title: "RadioSelection",
  component: RadioSelection,
} as Meta<typeof RadioSelection>;

const Template: StoryFn<typeof RadioSelection> = (args) => <RadioSelection {...args} />;

export const HelloWorld = Template.bind({});

export const RadioLoaded = () => {
  const [selections, setSelections] = React.useState(
    [{selected: false, title: 'hello world', name: 'helloWorld'},
    {selected: true, title: 'Choose me', name: 'choice'}])

  const makeSelection = (e: any) => {
    console.log(e)
    if (e) {
      setSelections ( prev => {
        let newSelections = [...prev]
        return newSelections.map( s => {
          if (s.name === e) s.selected = true;
          else s.selected = false
          return s 
        })
      })
    }
  }

  return <RadioSelection selections={selections} select={ makeSelection } />
  
}