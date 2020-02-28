<template>
  <v-navigation-drawer
    :value="value"
    @input="$emit('input', $event)"
    :mini-variant.sync="mini"
    absolute
    temporary
    fixed
  >
    <v-list>
      <v-list-item v-if="mini" @click.stop="mini = !mini">
        <v-list-item-avatar>
          <v-list-item-title>
            <v-icon color="#727272">chevron_right</v-icon>
          </v-list-item-title>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item v-if="!mini">
        <v-list-item-avatar>
          <v-icon color="red">account_circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-title>Jose</v-list-item-title>
        <v-list-item-action>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon color="#727272">chevron_left</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider light></v-divider>

      <v-list-item
        v-for="item in itemsnav"
        :key="item.title"
        :to="item.url"
        :exact="item.exact"
        @click.stop="$emit('input', false)"
      >
        <v-list-item-action>
          <v-icon color="black">{{ item.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group v-for="item in items" :key="item.title" no-action>
        <template v-slot:activator>
          <v-list-item-action>
            <v-icon color="black">{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :to="subItem.url"
          :exact="subItem.exact"
          @click.stop="$emit('input', false)"
        >
          <v-list-item-action>
            <v-icon>{{ subItem.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ subItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  name: "AppMenu",
  props: {
    value: Boolean
  },
  data: () => ({
    items: [
      {
        title: "Listar",
        icon: "list_alt",
        url: "/",
        items: [
          {
            title: "Admistradoras",
            url: "/relatorio",
            icon: "emoji_people"
          },
          {
            title: "Condomínios",
            url: "/relatorio",
            icon: "domain"
          },
          {
            title: "Usuários",
            url: "/usuarios",
            icon: "people"
          }
        ]
      }
    ],
    itemsnav: [
      {
        title: "Home",
        icon: "home",
        url: "/"
      },
      {
        title: "Enviar Email",
        icon: "alternate_email",
        url: "/mandaremail"
      },
      {
        title: "Visualizar Emails",
        icon: "mail_outline",
        url: "/veremails"
      }
    ],
    menuSair: { title: "Sair", icon: "exit_to_app", url: "", exact: true },
    mini: false
  }),
};
</script>
