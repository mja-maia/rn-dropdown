# Dropdown React Native - Concepta

## Note

I chose to invest more time in implementing tests and ensuring the proper usage of TypeScript. I decided to keep the Expo architecture as the default. Additionally, given the time limit of the test (maximum of 3 hours), I deemed it more important to focus on these foundational elements rather than exploring alternative architectures.

## How to run

1. Clone the project on some folder running `git clone https://github.com/mja-maia/rn-dropdown.git`
2. Run `yarn` or `npm i` to install all dependencies.
3. To run on iOs simulator just run `yarn ios` or `npm run ios` | `yarn android` or `npm run android` for Android simulator.
4. To run the tests just run `yarn test` or `npm run test`.

## Demo on expo.io

### Note: In the expo it was not possible to use the `ThemeProvider` that is provided by `styled-components`. There all colors are hardcoded

[Link to expo demo](https://snack.expo.dev/@mjamaia/dropdown-concepta?platform=ios)

## Example of usage

```tsx
<Dropdown align="right">
  <Dropdown.Items>
    <Dropdown.Item onPress={() => console.log("rename")}>
      Rename
    </Dropdown.Item>
    <Dropdown.Item onPress={() => console.log("delete")}>
      Delete
    </Dropdown.Item>
    <Dropdown.Item onPress={() => console.log("share")}>
      Share
    </Dropdown.Item>
  </Dropdown.Items>
</Dropdown>
```
