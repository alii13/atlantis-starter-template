<script setup lang="ts">
    import { Button, Heading, Input, Label, Banner } from '@atlanhq/atlantis'
    import { ref } from 'vue'
    import apiFetch from '@api'

    const apiError = ref(false)
    const apiSuccess = ref(false)
    const isLoading = ref(false)
    const payload = ref({
        host: '',
        port: '',
        extra: { database: '' },
        authType: 'basic',
        username: '',
        password: '',
    })
    const callApi = async () => {
        isLoading.value = true
        apiError.value = false
        apiSuccess.value = false
        try {
            const response = await apiFetch('/workflows/v1/auth', {
                method: 'POST',
                body: JSON.stringify(payload.value),
            })
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message)
            }

            apiSuccess.value = true
            return data.success
        } catch (error) {
            apiError.value = true
        } finally {
            isLoading.value = false
        }
    }
</script>

<template>
    <div class="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
        <Heading size="xl">Postgress app</Heading>
        <div class="grid cols-2 mt-4">
            <div class="mb-4 flex items-center gap-4">
                <Label>Host</Label>
                <Input placeholder="Host" v-model="payload.host" />
            </div>
            <div class="mb-4 flex items-center gap-4">
                <Label>Port</Label>
                <Input
                    placeholder="Port"
                    type="number"
                    v-model="payload.port"
                />
            </div>
            <div class="mb-4 flex items-center gap-4">
                <Label>Username</Label>
                <Input placeholder="Username" v-model="payload.username" />
            </div>
            <div class="mb-4 flex items-center gap-4">
                <Label>Password</Label>
                <Input
                    placeholder="Password"
                    type="password"
                    v-model="payload.password"
                />
            </div>
            <div class="mb-4 flex items-center gap-4">
                <Label>Database</Label>
                <Input
                    placeholder="Database"
                    v-model="payload.extra.database"
                />
            </div>
        </div>

        <Button type="primary" @click="callApi" :isLoading="true"
            >Test Connection</Button
        >

        <div class="mt-4" v-if="apiError">
            <Banner type="error" message="Test connection failed" />
        </div>
        <div class="mt-4" v-if="apiSuccess">
            <Banner type="success" message="Test connection successful" />
        </div>
    </div>
</template>

<style scoped></style>
