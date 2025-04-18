import React from "react"
import figma from "@figma/code-connect"
import RdsFabMenu from "./rds-fab-menu"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsFabMenu,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-Kit?node-id=2799-6032",
  {
    props: {
      state: figma.enum("💡 State.", {
        Default: "default",
        Hover: "hover",
        Selected: "selected",
      }),
    },
    example: (props) => <RdsFabMenu {...props} listItems={[]} />,
  },
)
