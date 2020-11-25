<template>
  <div class="home container">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Mailchimp 
      @onSubmit="onSubmit" 
      @onUpdate="onUpdate"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Mailchimp from "@/components/organisms/mailchimp/Mailchimp.vue";
// import monkey from "@mailchimp/mailchimp_marketing";

export default {
  name: "Subscribe",
  components: {
    Mailchimp
  },
  data () {
    return {
      showError: false, // form validation
      // input value is updated on @input event using v-model.
      // :value prop is binded on the input
      textValue: '',
      textValue2: '',
      textValue3: '',
      label: 'What\'s your email?',
      placeholder: "Enter your email",
      showIcon: true,
      icon: 'email'
    }
  },
  methods: {
    updateValue(value) {
      // TODO update form value on emit
      console.log(value)
    },
    onSubmit (value) {
      // TODO submit data to mailchimp api
       console.log(value)
      // TODO on successful submit, notify user
      // TODO on error notify user
      this.subscribeToList()
    },
    onUpdate (value) {
      // 
      console.log(value)
    },
    async subscribeToList () {
      // https://mailchimp.com/developer/guides/marketing-api-quick-start/#install-the-client-library-for-your-language
      // TODO subscribe user to mailchimp list
      // monkey.setConfig({
      //   apiKey: process.env.VUE_APP_YOUR_API_KEY,
      //   server: process.env.VUE_APP_YOUR_SERVER_PREFIX,
      // });
      // console.log(monkey)
      // async function run() {
      //   const response = await monkey.ping.get();
      //   console.log(response);
      // }
      // run();
      // TODO use axios proxy
      // TODO use firebase function as the api url. plus resource
      this.axios.get('/api/mailchimp/', {
        headers: {
           //  if u have some headers like this
          //  'Authorization': 'OAuth ' + process.env.VUE_APP_YOUR_API_KEY
          // 'Basic': 'any:' + process.env.VUE_APP_YOUR_API_KEY
        }
      })
        .then((response) => {
          console.log(response.data)
        })
    }
  }
};
</script>

<style lang="scss" scoped>
// FIXME scoped scss isn't using global
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // this is where we use the variable
  color: $primary;
  margin-top: 60px;
}
</style>