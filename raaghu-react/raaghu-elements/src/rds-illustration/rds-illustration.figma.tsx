import React from "react"
import figma from "@figma/code-connect"
import RdsIllustration from "./rds-illustration"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsIllustration,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-System?node-id=2155-3061",
  {
    props: {
      mode: figma.enum("🌙 Mode", {
        "Dark NRA": "Dark NRA",
        "Light NRA": "Light NRA",
        "Dark NCS": "dark-ncs",
        "Light NCS": "light-ncs",
      }),
    },
    example: (props) => <RdsIllustration {...props} iconHeight="250px"
    iconPath="/assets/lottie-files/outlined/dual-color/illustration-light.json"
    iconWidth="250px"
    label="Currently you don't have any data"
    subLabel="Click on the button above to add data"  />,
  },
)
