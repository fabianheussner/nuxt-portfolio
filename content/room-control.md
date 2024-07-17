---
title: 'Room Control · Competing with a switch'
description: "In recent years, the work environment has undergone significant transformations. Driven by the pandemic, workplace dynamics have changed considerably. As remote work becomes more prevalent, the demand for smart office solutions has increased. Modern offices, utilizing booking systems and space analysis, are increasingly tech-driven. To save costs, some offices are now even built without physical switches for lighting and blinds. So, how do you try to compete with a switch?"
image:
  src: '/img/fabian-heussner_og-image.png'
  alt: 'Fabian Heussner · Portfolio Website Preview'
  width: 1200
  height: 630
head:
  meta:
    - name: 'keywords'
      content: 'case study, project, ux, ui, ux/ui, wireframes, prototype, figma, portfolio, smart office, iot, room controls, smart home, mobile app, design, ux-writing, design system, components, screens'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'Fabian Heußner'
    - name: 'copyright'
      content: '© 2023 Fabian Heußner'
---

::case-intro
---
title: Room control
year: /23-24
---
::

::image-full
---
source: /img/cases/room-control/room-control-stage.png
description: Room control mobile app screens
---
::

::case-details
---
data:
    skills:
      - UX
      - UI
      - UX Writing
      - User Research
      - Design System

    details:
      - primary: Client
        secondary: ASML · White Label
      - primary: Credits
        secondary: thingit
      - primary: When
        secondary: /23-24
      - primary: What
        secondary: Mobile app
        
description: In recent years, the work environment has undergone significant transformations. Driven by the pandemic, workplace dynamics have changed considerably. As remote work becomes more prevalent, the demand for smart office solutions has increased. Modern offices, utilizing booking systems and space analysis, are increasingly tech-driven. To save costs, some offices are now even built without physical switches for lighting and blinds. So, how do you try to compete with a switch?
---
::

::image
---
images:
  - source: /img/cases/room-control/room-control-requirements.png
    description: Sticky notes with requirements for new room controls and around you

---
::

::text
#label
Situation
#headline 
Awareness and accessibility
#text 
Room controls in the existing app were quite hidden - in fact, so much that many users simply weren't aware of them. Due to their generic group concept, accessing the proper controls was also very tedious. In the course of the new home screen and the contextual retrieval of app permissions, we had the chance to improve this significantly. The anticipated increase in authorizations for camera, location and Bluetooth could enable additional location-based services too. Which ones? That's what we had to validate.
::

::image
---
images:
  - source: /img/cases/room-control/room-control-user-research.png
    description: Figma prototype for user research and table with insights gained

preset: top
---
::

::image
---
images:
  - source: /img/cases/room-control/room-control-insights.png
    description: Sticky notes with insights gained from user research

preset: bottom
---
::

::text
#label
Challenge
#headline 
Quest for easy access
#text 
When working on the new solution, we faced several constraints and challenges. The new room control entry point had to be unobtrusive, as not all users could utilize the feature due to the unavailability of controls in some older buildings. However, employees frequently change buildings during their work day on bigger sites, making accurate localization of users within the building essential for providing the correct controls. Additionally, many employees do not have the mobile app installed, leaving them unable to change the lighting or temperature of their workspace. This highlighted the need to explore alternative solutions that do not require the app – but this had to wait.
::

::image
---
images:
  - source: /img/cases/room-control/room-control-wireframes-1.png
    description: Room control and around you mobile app wireframes 
  - source: /img/cases/room-control/room-control-wireframes-2.png
    description: Room control and around you mobile app wireframes 

preset: top
---
::

::image
---
images:
  - source: /img/cases/room-control/room-control-wireframes-3.png
    description: Room control wireflow for mobile app 

preset: bottom
---
::

::text
#label
Outcome · Around you
#headline 
Exploration of ways to
#text 
A major aspect of the new implementation was exploring ways to provide easy access to room controls. During this phase, the concept of ‘Around You’ emerged, even though it was initially unclear which location-based content users might prefer besides the controls. We aimed for a solution that could accommodate more content than just controls while ensuring that controls, as the primary use case, were quickly accessible. To validate our ideas and concepts, we conducted several moderated and unmoderated user tests, gathering both qualitative and quantitative insights. We tested multiple versions utilizing different UI patterns in A/B tests to determine which version performed best for accessing ‘Around You,’ with a particular focus on room controls. The outcome is a subtle entry point that doesn’t need to be disabled by users uninterested in the ‘Around You’ feature and allows for easy prompting and regaining of required app permissions. Additionally, our solution offers direct and easy access to room controls via temporary notifications.
::

::image
---
images:
  - source: /img/cases/room-control/room-control-screens-1.png
    description: Different versions for entry points to room control
  - source: /img/cases/room-control/room-control-screens-2.png
    description: Different versions for entry points to room control

---
::

::text
#label
Outcome · Control UI
#headline 
Designing for scalability 
#text 
The existing room control UI displayed a lengthy list of temperature, blind, and light settings on a single screen, leading to extensive scrolling, especially for spaces with multiple adjustments. This resulted in a complicated and inconsistent UI, with each control having a unique interface. The new design needed to be generic to scale effectively, given the varying configurations from different manufacturers. By separating the control overview from the settings, we presented everything contextually at a glance. The new UI used components based on device configuration and was optimized for smaller company phones. This approach ensured an inclusive interface that accelerated functionalities, providing the best possible user experience to a wide audience.
::

::image
---
images:
  - source: /img/cases/room-control/room-control-components.png
    description: Collection of design system components used for room controls

preset: top
---
::

::image
---
images:
  - source: /img/cases/room-control/room-control-screens-3.png
    description: Mobile app screens with list of room controls and map
  - source: /img/cases/room-control/room-control-screens-4.png
    description: Mobile app screens with controls for light and temperature

preset: bottom
---
::

::text
#label
Contribution
#headline 
Navigating complexity
#text 
Being part of a client-funded team, my role as a Senior Product Designer involved strong collaboration with clients and other teams responsible for different parts of the app. Conducting both moderated and unmoderated user tests allowed me to validate concepts and prototypes, gaining valuable insights into additional user needs. Field testing on one of Europe’s largest sites provided me with a deeper understanding of the environment I was designing for and how the implemented infrastructure behaved in practice. Refining interactions and UI elements was integral to our iterative process, enabling us to deliver self-contained components across multiple app releases.
::

::pagination
---
caseTitle: Check in be out
url: check-in-be-out
imageSource: /img/cases/cico/cico-case-preview.png
imageDescription: Check in be out case preview
---
::