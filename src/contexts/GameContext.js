/*
    真田理志
    THIS IS THE GAME CONTEXT THAT WILL STORE THE GAME STATE.
*/

import React, { createContext, useReducer } from 'react';

export const GameContext = createContext();

// Create a
/*
Ok, so I'm trying to make a complex game with multiple variables that will be multipliers, etcetera.

here is some states:

intiialstate:

variables that determine everything:
timepassed (just an integer value that ticks with every event being done)... for example, 100 timepassed can be a day, 36500 time passed can be a year, each action you take passes some amount of time which interacts in some way with your variables)

3 biggest variables:
trust(trust amongst people who are following you with the false god): this is useful for when you need to mobilize your people, you need people to trust you, or else they will turn on you. if trust is lowered to 0%, your people will kill you and worship a false god in your place to their demise
wealth(amount of wealth you have to make things happen): this is useful for actions such as building an altar, library, etc... doing some sort of action that means you need money to make it happen. if money is lowered to 0%, you will not be able to mobilize or do anything
magic(success in performing rituals or attaining new informations/boons) this is useful for conducting things such as sacrifice, and can increase overall the trust+wealth you get IF rituals done properly to get results. this helps the other two, but doesn't mean much on its own. it allows for you to please your god easier, or rather, for you to have more overall power

more variables:
population: how many people are following you in your land
godhappiness: how happy your false god is with you (have you been doing sacrifices, rituals, etc...) (the lower this is the less reward you get for things)
knowledge: the prosperity of your village in terms of knowledge, technological advancements
birthrate: how many people are being produced per time passed elapsed
deathrate: how many people are dying per time passed elapsed
warcapability: how much more capable are your people in war

extra variables (buildings):
altar_numbers : amount of altars you have
barracks_numbers : amount of barracks you have
school_numbers : maount of schools you have
farm_numbers: amount of farms you have
temple_numbers: amount of temples you have

can you give me other variables that can be used?
Creating a complex game with multiple interacting variables can result in a richly dynamic gameplay experience. Based on your initial setup, here are additional variables you might consider incorporating to deepen the strategic aspects of your game:

### Environmental Variables:
1. **Climate**: Influences crop yield (affecting wealth), health (impacting population growth or decline), and even morale.
2. **Terrain**: Affects war capabilities, travel time, and even where and what type of buildings can be constructed.
3. **Resource Availability**: Essential resources like stone, wood, metal, and herbs can constrain or enable certain actions, affecting building opportunities and the prosperity of the village.
4. **Disasters**: Occasional events like earthquakes, droughts, or pestilence can test your management skills and affect multiple variables like population, trust, and wealth.

### Social and Cultural Variables:
5. **Religious Fervor**: How zealously your followers believe in the cause, affecting their willingness to participate in rituals or wars.
6. **Cultural Advances**: Affects knowledge, entertainment, and the societal development, impacting birthrate, trust, and population.
7. **Public Order**: Reflects the overall lawfulness and satisfaction within your community, affecting trust and the potential for insurrection.
8. **Diplomacy**: Relationships with neighboring tribes or regions could affect wealth through trade, or risk through war.

### Economic and Developmental Variables:
9. **Market Stability**: Reflects the economic health, influencing prices for goods and the wealth variable.
10. **Tech Level**: Enhances or restricts the construction of advanced buildings and better farming techniques or war tools.
11. **Trade Routes**: Number and quality of trade connections, affecting wealth and resource availability.

### Health and Demographic Variables:
12. **Healthcare Facilities**: Number of hospitals or healing centers, influencing population and deathrate.
13. **Average Lifespan**: Influenced by healthcare, food supply, and living conditions, affecting knowledge transfer and workforce stability.
14. **Immigration/Emigration Rates**: Affects the population, bringing in new skills or losing workforce, depending on the conditions within your domain.
15. **Fertility Treatments**: Special buildings or rituals to enhance birthrate.

### Infrastructure Variables:
16. **Roads**: Improve trade and troop movement speed but require maintenance.
17. **Water Supply**: Essential for population health and farming, could be represented by wells or aqueducts.
18. **Defense Systems**: Walls, towers, etc., directly influencing war capabilities and public order by providing security.
19. **Energy Sources**: Depending on the era, this could range from simple manpower to advanced energy solutions affecting productivity and growth rate.

### Miscellaneous Variables:
20. **Espionage**: Ability to gather intelligence on other factions, influencing diplomatic and military decisions.
21. **Artifact Holdings**: Special items that can provide unique bonuses or powers, influencing various aspects based on their nature.
22. **Cultural Monuments**: Impact morale and cultural level, possibly affecting religious fervor and public order.

Integrating these variables requires careful balancing to ensure one does not overwhelmingly dominate gameplay but rather that they interact in meaningful and sometimes unexpected ways to provide a rich strategic experience. Each variable should have clear consequences and interdependencies to encourage players to plan and strategize effectively.
*/

const initialState = {
    baseVariables: {
        timePassed: 0,
        godChosen: null, // Will become either raphat, isahra, or mil'aab
        trust: 25, // multipliers (so 25%) (if it reaches 0, you lose)
        wealth: 100, // currency
        maxWealth: 1000, // max currency
        magic: 0, // magic power
        maxMagic: 100, // max magic power
        percentageConquered: 0, // percentage to 100 (if the population reaches integer of 1,000,000 you win, so your population is 20,000, you have 5% of the world)
    },
    secondaryVariables: {
        population: 100, // actual integer
        godHappiness: 50, // multipliers
        knowledge: 50, // multipliers
        birthRate: 5, // actual integer
        deathRate: 3, // actual integer (so for each action 3 die for 5 born)
        warCapability: 50, // multipliers
    },
    buildings: {
        altarNumbers: 0, // actual integer 
        barracksNumbers: 0, // actual integer, increase means that you can win more wars with more troops
        schoolNumbers: 0, // actual integer, increase means that you can increase knowledge faster and cultural advances
        farmNumbers: 0, // actual integer, increase means that you can increase population growth and health+age+etc
        templeNumbers: 0, // actual integer, increase means that you can increase god happiness and perform more rituals
    },
    socialCulturalVariables: {
        religiousFervor: 50, // how much people believe in the god (affects happiness)
        culturalAdvances: 50, // affects knowledge, entertainment, societal development
        publicOrder: 50, // affects trust and potential for insurrection (lower it gets, the more likely people will turn on you)
        diplomacy: 50, // affects wealth through trade, or risk through war
    },
    economicDevelopmentalVariables: {
        marketStability: 50, // affects economic health, prosperity
        techLevel: 25, // affects construction of advanced buildings, farming techniques, war tools, etc...
        tradeRoutes: 25, // affects wealth and resource availability, as well as gaining new followers
    },
    healthDemographicVariables: {
        healthcareFacilities: 0, // affects population and deathrate (lower it gets, the more people die per time passed)
        averageLifespan: 50, // the higher it gets, the more knowledge is transferred, and the more stable the workforce
        immigrationEmigrationRates: 0, // affects population, bringing in new skills or losing workforce
        fertilityTreatments: 0, // affects birthrate
    },
    infrastructureVariables: {
        roads: 0, // affects trade and troop movement speed
        waterSupply: 0, // affects population health and farming (higher it gets, the more people are healthy and the more food is produced, etc...)
        defenseSystems: 0, // affects war capabilities and public order
        energySources: 0, // affects productivity and growth rate
    },
    miscellaneousVariables: {
        espionage: 0, // affects diplomatic and military decisions (can help you win wars, etc...)
        artifactHoldings: 0, // affects various aspects based on their nature
        culturalMonuments: 0, // affects morale and cultural level (more monuments, more followers bc they see your gods)
    },
};

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_TIMEPASSED':
            return {
                ...state,
                baseVariables: {
                    ...state.baseVariables,
                    timePassed: state.baseVariables.timePassed + action.payload,
                }
            };
        case 'DECREMENT_TRUST':
            return {
                ...state,
                baseVariables: {
                    ...state.baseVariables,
                    trust: state.baseVariables.trust - action.payload,
                }
            };
        case 'INCREMENT_TRUST':
            return {
                ...state,
                baseVariables: {
                    ...state.baseVariables,
                    trust: state.baseVariables.trust + action.payload,
                }
            };
        case 'DECREMENT_WEALTH':
            return {
                ...state,
                baseVariables: {
                    ...state.baseVariables,
                    wealth: state.baseVariables.wealth - action.payload,
                }
            };
        case 'INCREMENT_WEALTH':
            return {
                ...state,
                baseVariables: {
                    ...state.baseVariables,
                    wealth: state.baseVariables.wealth + action.payload,
                }
            };
        case 'INCREMENT_MAXWEALTH':
            return {
                ...state,
                baseVariables: {
                    ...state.baseVariables,
                    maxWealth: state.baseVariables.maxWealth + action.payload,
                }
            };
        case 'DECREMENT_MAXWEALTH':
            return {
                ...state,
                baseVariables: {
                    ...state.baseVariables,
                    maxWealth: state.baseVariables.maxWealth - action.payload,
                }
            };
        case 'DECREMENT_MAGIC':
            return {
                ...state,
                baseVariables: {
                    ...state.baseVariables,
                    magic: state.baseVariables.magic - action.payload,
                }
            };
        case 'INCREMENT_MAXMAGIC':
            return {
                ...state,
                baseVariables: {
                    ...state.baseVariables,
                    maxMagic: state.baseVariables.maxMagic + action.payload,
                }
            };
        case 'DECREMENT_MAXMAGIC':
            return {
                ...state,
                baseVariables: {
                    ...state.baseVariables,
                    maxMagic: state.baseVariables.maxMagic - action.payload,
                }
            };
        case 'INCREMENT_MAGIC':
            return {
                ...state,
                baseVariables: {
                    ...state.baseVariables,
                    magic: state.baseVariables.magic + action.payload,
                }
            };
        case 'INCREMENT_POPULATION':
            return {
                ...state,
                secondaryVariables: {
                    ...state.secondaryVariables,
                    population: state.secondaryVariables.population + action.payload,
                }
            };
        case 'DECREMENT_POPULATION':
            return {
                ...state,
                secondaryVariables: {
                    ...state.secondaryVariables,
                    population: state.secondaryVariables.population - action.payload,
                }
            };
        case 'INCREMENT_GODHAPPINESS':
            return {
                ...state,
                secondaryVariables: {
                    ...state.secondaryVariables,
                    godHappiness: state.secondaryVariables.godHappiness + action.payload,
                }
            };
        case 'DECREMENT_GODHAPPINESS':
            return {
                ...state,
                secondaryVariables: {
                    ...state.secondaryVariables,
                    godHappiness: state.secondaryVariables.godHappiness - action.payload,
                }
            };
        case 'INCREMENT_KNOWLEDGE':
            return {
                ...state,
                secondaryVariables: {
                    ...state.secondaryVariables,
                    knowledge: state.secondaryVariables.knowledge + action.payload,
                }
            };
        case 'DECREMENT_KNOWLEDGE':
            return {
                ...state,
                secondaryVariables: {
                    ...state.secondaryVariables,
                    knowledge: state.secondaryVariables.knowledge - action.payload,
                }
            };
        case 'INCREMENT_BIRTHRATE':
            return {
                ...state,
                secondaryVariables: {
                    ...state.secondaryVariables,
                    birthRate: state.secondaryVariables.birthRate + action.payload,
                }
            };
        case 'DECREMENT_BIRTHRATE':
            return {
                ...state,
                secondaryVariables: {
                    ...state.secondaryVariables,
                    birthRate: state.secondaryVariables.birthRate - action.payload,
                }
            };
        case 'INCREMENT_DEATHRATE':
            return {
                ...state,
                secondaryVariables: {
                    ...state.secondaryVariables,
                    deathRate: state.secondaryVariables.deathRate + action.payload,
                }
            };
        case 'DECREMENT_DEATHRATE':
            return {
                ...state,
                secondaryVariables: {
                    ...state.secondaryVariables,
                    deathRate: state.secondaryVariables.deathRate - action.payload,
                }
            };
        case 'INCREMENT_WARCAPABILITY':
            return {
                ...state,
                secondaryVariables: {
                    ...state.secondaryVariables,
                    warCapability: state.secondaryVariables.warCapability + action.payload,
                }
            };
        case 'DECREMENT_WARCAPABILITY':
            return {
                ...state,
                secondaryVariables: {
                    ...state.secondaryVariables,
                    warCapability: state.secondaryVariables.warCapability - action.payload,
                }
            };
        case 'INCREMENT_ALTARNUMBERS':
            return {
                ...state,
                buildings: {
                    ...state.buildings,
                    altarNumbers: state.buildings.altarNumbers + action.payload,
                }
            };
        case 'DECREMENT_ALTARNUMBERS':
            return {
                ...state,
                buildings: {
                    ...state.buildings,
                    altarNumbers: state.buildings.altarNumbers - action.payload,
                }
            };
        case 'INCREMENT_BARRACKSNUMBERS':
            return {
                ...state,
                buildings: {
                    ...state.buildings,
                    barracksNumbers: state.buildings.barracksNumbers + action.payload,
                }
            };
        case 'DECREMENT_BARRACKSNUMBERS':
            return {
                ...state,
                buildings: {
                    ...state.buildings,
                    barracksNumbers: state.buildings.barracksNumbers - action.payload,
                }
            };
        case 'INCREMENT_SCHOOLNUMBERS':
            return {
                ...state,
                buildings: {
                    ...state.buildings,
                    schoolNumbers: state.buildings.schoolNumbers + action.payload,
                }
            };
        case 'DECREMENT_SCHOOLNUMBERS':
            return {
                ...state,
                buildings: {
                    ...state.buildings,
                    schoolNumbers: state.buildings.schoolNumbers - action.payload,
                }
            };
        case 'INCREMENT_FARMNUMBERS':
            return {
                ...state,
                buildings: {
                    ...state.buildings,
                    farmNumbers: state.buildings.farmNumbers + action.payload,
                }
            };
        case 'DECREMENT_FARMNUMBERS':
            return {
                ...state,
                buildings: {
                    ...state.buildings,
                    farmNumbers: state.buildings.farmNumbers - action.payload,
                }
            };
        case 'INCREMENT_TEMPLENUMBERS':
            return {
                ...state,
                buildings: {
                    ...state.buildings,
                    templeNumbers: state.buildings.templeNumbers + action.payload,
                }
            };
        case 'DECREMENT_TEMPLENUMBERS':
            return {
                ...state,
                buildings: {
                    ...state.buildings,
                    templeNumbers: state.buildings.templeNumbers - action.payload,
                }
            };
        case 'INCREMENT_RELIGIOUSFERVOR':
            return {
                ...state,
                socialCulturalVariables: {
                    ...state.socialCulturalVariables,
                    religiousFervor: state.socialCulturalVariables.religiousFervor + action.payload,
                }
            };
        case 'DECREMENT_RELIGIOUSFERVOR':
            return {
                ...state,
                socialCulturalVariables: {
                    ...state.socialCulturalVariables,
                    religiousFervor: state.socialCulturalVariables.religiousFervor - action.payload,
                }
            };
        case 'INCREMENT_CULTURALADVANCES':
            return {
                ...state,
                socialCulturalVariables: {
                    ...state.socialCulturalVariables,
                    culturalAdvances: state.socialCulturalVariables.culturalAdvances + action.payload,
                }
            };
        case 'DECREMENT_CULTURALADVANCES':
            return {
                ...state,
                socialCulturalVariables: {
                    ...state.socialCulturalVariables,
                    culturalAdvances: state.socialCulturalVariables.culturalAdvances - action.payload,
                }
            };
        case 'INCREMENT_PUBLICORDER':
            return {
                ...state,
                socialCulturalVariables: {
                    ...state.socialCulturalVariables,
                    publicOrder: state.socialCulturalVariables.publicOrder + action.payload,
                }
            };
        case 'DECREMENT_PUBLICORDER':
            return {
                ...state,
                socialCulturalVariables: {
                    ...state.socialCulturalVariables,
                    publicOrder: state.socialCulturalVariables.publicOrder - action.payload,
                }
            };
        case 'INCREMENT_DIPLOMACY':
            return {
                ...state,
                socialCulturalVariables: {
                    ...state.socialCulturalVariables,
                    diplomacy: state.socialCulturalVariables.diplomacy + action.payload,
                }
            };
        case 'DECREMENT_DIPLOMACY':
            return {
                ...state,
                socialCulturalVariables: {
                    ...state.socialCulturalVariables,
                    diplomacy: state.socialCulturalVariables.diplomacy - action.payload,
                }
            };
        case 'INCREMENT_MARKETSTABILITY':
            return {
                ...state,
                economicDevelopmentalVariables: {
                    ...state.economicDevelopmentalVariables,
                    marketStability: state.economicDevelopmentalVariables.marketStability + action.payload,
                }
            };
        case 'DECREMENT_MARKETSTABILITY':
            return {
                ...state,
                economicDevelopmentalVariables: {
                    ...state.economicDevelopmentalVariables,
                    marketStability: state.economicDevelopmentalVariables.marketStability - action.payload,
                }
            };
        case 'INCREMENT_TECHLEVEL':
            return {
                ...state,
                economicDevelopmentalVariables: {
                    ...state.economicDevelopmentalVariables,
                    techLevel: state.economicDevelopmentalVariables.techLevel + action.payload,
                }
            };
        case 'DECREMENT_TECHLEVEL':
            return {
                ...state,
                economicDevelopmentalVariables: {
                    ...state.economicDevelopmentalVariables,
                    techLevel: state.economicDevelopmentalVariables.techLevel - action.payload,
                }
            };
        case 'INCREMENT_TRADEROUTES':
            return {
                ...state,
                economicDevelopmentalVariables: {
                    ...state.economicDevelopmentalVariables,
                    tradeRoutes: state.economicDevelopmentalVariables.tradeRoutes + action.payload,
                }
            };
        case 'DECREMENT_TRADEROUTES':
            return {
                ...state,
                economicDevelopmentalVariables: {
                    ...state.economicDevelopmentalVariables,
                    tradeRoutes: state.economicDevelopmentalVariables.tradeRoutes - action.payload,
                }
            };
        case 'INCREMENT_HEALTHCAREFACILITIES':
            return {
                ...state,
                healthDemographicVariables: {
                    ...state.healthDemographicVariables,
                    healthcareFacilities: state.healthDemographicVariables.healthcareFacilities + action.payload,
                }
            };
        case 'DECREMENT_HEALTHCAREFACILITIES':
            return {
                ...state,
                healthDemographicVariables: {
                    ...state.healthDemographicVariables,
                    healthcareFacilities: state.healthDemographicVariables.healthcareFacilities - action.payload,
                }
            };
        case 'INCREMENT_AVERAGELIFESPAN':
            return {
                ...state,
                healthDemographicVariables: {
                    ...state.healthDemographicVariables,
                    averageLifespan: state.healthDemographicVariables.averageLifespan + action.payload,
                }
            };
        case 'DECREMENT_AVERAGELIFESPAN':
            return {
                ...state,
                healthDemographicVariables: {
                    ...state.healthDemographicVariables,
                    averageLifespan: state.healthDemographicVariables.averageLifespan - action.payload,
                }
            };
        case 'INCREMENT_IMMIGRATIONEMIGRATIONRATES':
            return {
                ...state,
                healthDemographicVariables: {
                    ...state.healthDemographicVariables,
                    immigrationEmigrationRates: state.healthDemographicVariables.immigrationEmigrationRates + action.payload,
                }
            };
        case 'DECREMENT_IMMIGRATIONEMIGRATIONRATES':
            return {
                ...state,
                healthDemographicVariables: {
                    ...state.healthDemographicVariables,
                    immigrationEmigrationRates: state.healthDemographicVariables.immigrationEmigrationRates - action.payload,
                }
            };
        case 'INCREMENT_FERTILITYTREATMENTS':
            return {
                ...state,
                healthDemographicVariables: {
                    ...state.healthDemographicVariables,
                    fertilityTreatments: state.healthDemographicVariables.fertilityTreatments + action.payload,
                }
            };
        case 'DECREMENT_FERTILITYTREATMENTS':
            return {
                ...state,
                healthDemographicVariables: {
                    ...state.healthDemographicVariables,
                    fertilityTreatments: state.healthDemographicVariables.fertilityTreatments - action.payload,
                }
            };
        case 'INCREMENT_ROADS':
            return {
                ...state,
                infrastructureVariables: {
                    ...state.infrastructureVariables,
                    roads: state.infrastructureVariables.roads + action.payload,
                }
            };
        case 'DECREMENT_ROADS':
            return {
                ...state,
                infrastructureVariables: {
                    ...state.infrastructureVariables,
                    roads: state.infrastructureVariables.roads - action.payload,
                }
            };
        case 'INCREMENT_WATERSUPPLY':
            return {
                ...state,
                infrastructureVariables: {
                    ...state.infrastructureVariables,
                    waterSupply: state.infrastructureVariables.waterSupply + action.payload,
                }
            };
        case 'DECREMENT_WATERSUPPLY':
            return {
                ...state,
                infrastructureVariables: {
                    ...state.infrastructureVariables,
                    waterSupply: state.infrastructureVariables.waterSupply - action.payload,
                }
            };
        case 'INCREMENT_DEFENSESYSTEMS':
            return {
                ...state,
                infrastructureVariables: {
                    ...state.infrastructureVariables,
                    defenseSystems: state.infrastructureVariables.defenseSystems + action.payload,
                }
            };
        case 'DECREMENT_DEFENSESYSTEMS':
            return {
                ...state,
                infrastructureVariables: {
                    ...state.infrastructureVariables,
                    defenseSystems: state.infrastructureVariables.defenseSystems - action.payload,
                }
            };
        case 'INCREMENT_ENERGYSOURCES':
            return {
                ...state,
                infrastructureVariables: {
                    ...state.infrastructureVariables,
                    energySources: state.infrastructureVariables.energySources + action.payload,
                }
            };
        case 'DECREMENT_ENERGYSOURCES':
            return {
                ...state,
                infrastructureVariables: {
                    ...state.infrastructureVariables,
                    energySources: state.infrastructureVariables.energySources - action.payload,
                }
            };
        case 'INCREMENT_ESPIONAGE':
            return {
                ...state,
                miscellaneousVariables: {
                    ...state.miscellaneousVariables,
                    espionage: state.miscellaneousVariables.espionage + action.payload,
                }
            };
        case 'DECREMENT_ESPIONAGE':
            return {
                ...state,
                miscellaneousVariables: {
                    ...state.miscellaneousVariables,
                    espionage: state.miscellaneousVariables.espionage - action.payload,
                }
            };
        case 'INCREMENT_ARTIFACTHOLDINGS':
            return {
                ...state,
                miscellaneousVariables: {
                    ...state.miscellaneousVariables,
                    artifactHoldings: state.miscellaneousVariables.artifactHoldings + action.payload,
                }
            };
        case 'DECREMENT_ARTIFACTHOLDINGS':
            return {
                ...state,
                miscellaneousVariables: {
                    ...state.miscellaneousVariables,
                    artifactHoldings: state.miscellaneousVariables.artifactHoldings - action.payload,
                }
            };
        case 'INCREMENT_CULTURALMONUMENTS':
            return {
                ...state,
                miscellaneousVariables: {
                    ...state.miscellaneousVariables,
                    culturalMonuments: state.miscellaneousVariables.culturalMonuments + action.payload,
                }
            };
        case 'DECREMENT_CULTURALMONUMENTS':
            return {
                ...state,
                miscellaneousVariables: {
                    ...state.miscellaneousVariables,
                    culturalMonuments: state.miscellaneousVariables.culturalMonuments - action.payload,
                }
            };
        default:
            return state;
    }
};

const GameContextProvider = ({ children }) => {
    const [gameState, dispatch] = useReducer(gameReducer, initialState);

    return (
        <GameContext.Provider value={{ gameState, dispatch }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;

