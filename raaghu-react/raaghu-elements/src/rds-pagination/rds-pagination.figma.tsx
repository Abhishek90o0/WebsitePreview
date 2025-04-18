import React from "react"
import figma from "@figma/code-connect"
import RdsPagination from "./rds-pagination"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsPagination,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-Kit?node-id=702-6035",
  {
    props: {
      showManualInput: figma.boolean("✍ - Show Manual Input"),
      showLast: figma.boolean("➡️ - Show Last"),
      showFirst: figma.boolean("⬅️ - Show First"),
      showDropdown: figma.boolean("🔽 - Show Dropdown"),
      style: figma.enum("✨ Style", {
        "Style 1": "Style1",
        "Style 2": "Style2",
        "Style 3": "Style3",
        "Style 4": "Style4",
        "Style 5": "Style5",
        "Style 6": "Style6",
        "Style 7": "Style7",
        "Style 8": "Style8",
        "Style 9": "Style9",
        "Style 10": "Style10",
        "Style 11": "Style11",
      }),
    },
    example: (props) => <RdsPagination totalRecords={10} {...props} alignmentType="start" paginationType="default" 
    recordsPerPage={3}
    showLegend
    size="small"/>,
  },
)
