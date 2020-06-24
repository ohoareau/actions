# Env Vars from Env javascript action

This action retrieved some env vars prefixed with the specified env name.

## Inputs

### `env`

**Required** The name of the env.

## Outputs

None. (setting the `env` env var)

## Example usage

    uses: ohoareau/actions/env-vars-from-env@master

or, for pull-requests (you can use that syntax in any circumstances):

    uses: ohoareau/actions/env-vars-from-env@master
    with:
        env: dev
