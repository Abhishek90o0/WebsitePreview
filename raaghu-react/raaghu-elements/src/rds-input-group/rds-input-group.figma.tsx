import React from "react"
import figma from "@figma/code-connect"
import RdsInputGroup, { InputGroupSize } from "./rds-input-group"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsInputGroup,
  "https://www.figma.com/design/wGW5jiXyoAdO4DVLgCKXmw/Raaghu-Storybook-Elements?node-id=146-19346",
  {
    props: {
      size: figma.enum("Size", {
        Small: InputGroupSize.Small,
        Medium: InputGroupSize.Medium,
        Large: InputGroupSize.Large,
      }),
    },
    example: (props) => <RdsInputGroup {...props} colorVariant={"Primary"}/>,
  },
)
