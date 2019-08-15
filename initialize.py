#!/usr/bin/env python3.6

#  from subprocess import call
from pathlib import Path
#  import sys
#  import random
#  import string


PROJECT_NAME = 'imonir'
ENVIRONMENT = Path('.env.run').read_text().rstrip()

print(f"Environment: {ENVIRONMENT}")
notDevelopment = ENVIRONMENT != 'development'


# CONTAINERS

# env vars
nodeEnv = ENVIRONMENT


# back env vars
virtualHostBack = 'api.imonir.com' if notDevelopment  else 'local.api.imonir.com'
virtualPortBack = 8100

# front env vars
virtualHostFront = 'www.imonir.com' if notDevelopment  else 'local.www.imonir.com'
virtualPortFront = 4100

apiUrl = virtualHostBack
apiUrlFromServer = 'imonirback'



# front env file
envFront = f"COMPOSE_PROJECT_NAME={PROJECT_NAME}\n\n"\
      f"VIRTUAL_HOST={virtualHostFront}\n"\
      f"VIRTUAL_PORT={virtualPortFront}\n\n"\
      f"API_URL={apiUrl}\n"\
      f"API_URL_FROM_SERVER={apiUrlFromServer}"

# back env file
envBack = f"COMPOSE_PROJECT_NAME={PROJECT_NAME}\n\n"\
      f"VIRTUAL_HOST={virtualHostBack}\n"\
      f"VIRTUAL_PORT={virtualPortBack}"



# WRITE TO ENV FILES
with open('./.env.front', 'w+') as f:
    print('Creating ./.env.front')
    f.write(envFront)

with open('./.env.back', 'w+') as f:
    print('Creating ./.env.back')
    f.write(envBack)


print("\n")
print('DONE!')
