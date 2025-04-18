import React from "react"
import figma from "@figma/code-connect"
import RdsBenefit from "./rds-benefit"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsBenefit,
  "https://www.figma.com/design/wGW5jiXyoAdO4DVLgCKXmw/Raaghu-Storybook-Elements?node-id=244-346",
  {
    props: {
      showIcon: figma.boolean("Show Icon"),
      style: figma.enum("✨ Style", {
        Default: "default",
        Outlined: "outlined",
      }),
    },
    example: (props) => <RdsBenefit {...props} item={undefined} displayType={""} />,
  },
)
