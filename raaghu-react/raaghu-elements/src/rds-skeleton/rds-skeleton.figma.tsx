import React from "react"
import figma from "@figma/code-connect"
import RdsSkeleton, { RdsSkeletonShape, SkeletonState } from "./rds-skeleton"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  RdsSkeleton,
  "https://www.figma.com/design/vziFLZAgMFi8wA5SlikLh5/Raaghu---Design-Kit?node-id=1518-15456",
  {
    props: {
      shape: figma.enum("💠 Shape", {
        "Rectangle (default)": RdsSkeletonShape.RECTANGLE,
        Circle: RdsSkeletonShape.CIRCLE,
      }),
      isAnimated: figma.boolean("👾 - Animation"), // ✅ Updated prop name
      state: figma.enum("💡 State", {
        "1": SkeletonState.State1,
        "2": SkeletonState.State2,
        "3": SkeletonState.State3,
      }),
    },
    example: (props) => <RdsSkeleton {...props} />,
  },
);
