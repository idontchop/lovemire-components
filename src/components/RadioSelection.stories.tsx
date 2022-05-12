import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioSelection from "./RadioSelection";
import {ThemeProvider} from 'styled-components'

let choice = false

export const Standard =  {
  colors: {
      // abstract
      primary: "#ebe6e6",
      secondary: "#707070",
      test: 'purple',

      // specific
      background: "#e8e8e8",
      secondaryBackground: "#f5f5f5",
      title: "#707070",
      button: "#CAB5B5",
      buttonSelected: "white",
      p: "#86888B",
      selected: "#cab5b5",
      unselected: "#707070",
      selectedHighlight: "c9a5a5",
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

export const EmptyTheme = {

}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "RadioSelection",
  component: RadioSelection,
} as ComponentMeta<typeof RadioSelection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioSelection> = (args) => <RadioSelection {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  selections: [{selected: false, title: 'hello world', name: 'helloWorld'}],
  select: () => console.log("clicked")
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  selections: [{selected: choice, title: 'hello world', name: 'helloWorld'},
  {selected: !choice, title: 'Choose me', name: 'choice'}
],
  select: (e: string) => console.log("changed")
};

export const RadioLoaded = () => {



  const [selections, setSelections] = React.useState([{selected: false, title: 'hello world', name: 'helloWorld'},
  {selected: true, title: 'Choose me', name: 'choice'}
])

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

  return <ThemeProvider theme={Standard}>
    <RadioSelection selections={selections} select={ makeSelection } />
  </ThemeProvider>

}