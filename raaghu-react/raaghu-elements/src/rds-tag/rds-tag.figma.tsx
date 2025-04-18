import React from "react"
import figma from "@figma/code-connect"
import RdsTag from "./rds-tag"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsTag,
  "https://www.figma.com/design/wGW5jiXyoAdO4DVLgCKXmw/Raaghu-Storybook-Elements?node-id=228-24959",
  {
    props: {
      property1: figma.enum("Property 1", {
        "Level 2": "level-2",
        "Level 3": "level-3",
        "Level 4": "level-4",
        "Level 5": "level-5",
      }),
    },
    example: (props) => <RdsTag {...props} tagType={"square"} role={"basic"} colorVariant={"primary"} />,
  },
)
