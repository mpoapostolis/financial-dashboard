"use client";
import {
  BadgeDelta,
  Card,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";
import React from "react";

type Props = {
  name: string;
  amount: number;
  showDelta?: boolean;
  showDollar?: boolean;
};

const DataCard = (props: Props) => {
  const { name, amount } = props;
  return (
    <div>
      <Card className="mx-auto max-w-lg">
        <Flex alignItems="start">
          <div>
            <Text>{name}</Text>
            <Metric>
              {props.showDollar ? `€` : ""} {amount}
            </Metric>
          </div>
        </Flex>
        <Flex className="mt-4">
          <Text className="truncate">68% (€ 149,940)</Text>
          <Text>{props.showDollar ? `€` : ""} 220,500</Text>
        </Flex>
        <ProgressBar value={15.9} className="mt-2" />
      </Card>
    </div>
  );
};

export default DataCard;
