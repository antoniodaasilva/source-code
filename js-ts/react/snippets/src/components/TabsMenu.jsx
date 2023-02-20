export function TabsMenu() {
  return (
    <div>
      <Tabs defaultIndex="1" onTabClick={console.log}>
        <TabItem label="A" index="1">
          Lorem ipsum
        </TabItem>
        <TabItem label="B" index="2">
          Dolor sit amet
        </TabItem>
      </Tabs>
    </div>
  )
}