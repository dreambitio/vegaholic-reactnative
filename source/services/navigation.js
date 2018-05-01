export const screenNavigationOptions = options => ({
  title: options.title,
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
    fontSize: 42
  },
  headerStyle: {
    elevation: 0, //remove shadow on Android
    shadowOpacity: 0, //remove shadow on iOS
    height: 110,
    backgroundColor: options.headerBackgroundColor
  },
  tabBarIcon: options.tabBarIcon
})