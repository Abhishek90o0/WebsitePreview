import React from "react"
import figma from "@figma/code-connect"
import RdsLineChart from "./rds-chart-line"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsLineChart,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-System?node-id=9958-1369",
  {
    props: {
      showMyFirstDataset: figma.boolean("Show My First Dataset"),
      showLegend: figma.boolean("Show Legend"),
      state: figma.enum("State", {
        Default: "default",
        Hover: "hover",
      }),
    },
    example: (props) => <RdsLineChart {...props} labels={[]} options={undefined} dataSets={[]} id={""} />,
  },
)
