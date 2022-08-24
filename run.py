import os
import argparse
import shutil
import sys
from colorama import Fore

parse = argparse.ArgumentParser()

parse.add_argument('--git', action='store_true', default=False)
parse.add_argument('--build', action='store_true', default=False)
parse.add_argument('--upload', action='store_true', default=False)

opt = parse.parse_args()

if __name__ == '__main__':

    if opt.git:
        os.system('git add .')

        os.system('git commit -m "Commit Bot :) "')
        os.system('git push')
        sys.stdout.write(f'{Fore.YELLOW} DONE PUSHING TO GITHUB')

    if opt.build:
        os.system('npm run build')
        shutil.make_archive('build', 'zip', 'build')
        sys.stdout.write(f'{Fore.YELLOW} DONE MAKING BUILD')

    if opt.upload:
        if os.path.exists('build.zip'):
            os.system('scp -P 2244  build.zip root@152.228.149.229:/home/aioptic/public_html/')
            sys.stdout.write(f'{Fore.YELLOW} DONE UPLOADING')
            # time.sleep(2)

            # pyautogui.write('hivWTM864', interval=0.25)
