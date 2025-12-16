---
id: event-manager
title: Event Monitor
displayed_sidebar: tutorialSidebar
---


The **Event Monitor** provides a live, real-time view of **all events flowing through SkyrimNet**. It acts as an inspection and debugging tool, allowing you to observe event traffic, examine event payloads, and rapidly build AI triggers based on real in-game activity.

### Core Capabilities
- **Live Event Stream**  
  Displays events as they occur in-game, updated in real time with configurable refresh rates.


<p align="center">
  <img src="/SkyrimNet-GamePlugin/img/monitor.PNG" alt="events" width="1200"/>
</p>


- **Event Statistics Dashboard**  
  High-level metrics including:
  - Events per second
  - Currently displayed events
  - Total events observed
  - Filtered events
  - Persisted and short-lived event counts

- **Powerful Filtering**
  - Filter by **event type** (e.g. `animation_event`, `mod_event`, `active_effect`, `activation`, `equip`, etc.)
  - Toggle visibility for filtered events
  - Limit the number of displayed events
  - View event type distribution at a glance

- **Event Feed Inspection**
  - Each event entry shows its type, name, timestamp, and status
  - Events can be expanded to inspect their full payload / JSON data
  - Payload fields can be referenced in triggers using `event_json.*`

- **Trigger Creation**
  - Any observed event can be used as the basis for creating an AI trigger directly from the event feed
  - Trigger parameters are auto-suggested from the event payload to accelerate setup




### Current Limitations
- **Imperfect Parameter Suggestions**  
  Auto-generated trigger parameters may be inaccurate for some event types and require manual adjustment. Event data should be accessed using `event_json.<field>` paths.

- **Limited Event Retention**  
  Only a limited number of recent events are kept in memory. Older events will disappear if not inspected or used promptly.

### Primary Use Cases
- Debugging SkyrimNet integrations and in-game systems
- Discovering new or undocumented event payload structures
- Designing and validating AI Triggers based on real gameplay data
- Monitoring performance and event throughput in real time