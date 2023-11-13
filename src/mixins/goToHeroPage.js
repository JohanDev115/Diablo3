import router from "../router"

export default function goToHeroPage(region, battleTag, heroId) {

      // Navegar a la ruta "Hero"
  router.push({ name: 'Hero', params: { region, battleTag, heroId } })
}
