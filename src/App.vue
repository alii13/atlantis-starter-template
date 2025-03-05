<script setup lang="ts">
    import {
        Button,
        Heading,
        Input,
        Label,
        HintMessage,
    } from '@atlanhq/atlantis'
    import { ref } from 'vue'

    const isModalOpen = ref(false)

    const handleModalVisibility = () => {
        isModalOpen.value = !isModalOpen.value
    }
</script>

<template>
    <div class="p-8 w-[484px] shadow-xl rounded-md bg-white">
        <div>
            <div class="flex justify-center items-center flex-col mb-6">
                <div class="text-blue-800">
                    <Heading as="h1" size="xl" fontWeight="bold">
                        Giphy App 🤖
                    </Heading>
                </div>

                <Heading as="h5" size="md" fontWeight="light">
                    send gifs to your friends
                </Heading>
            </div>

            <div class="mb-4">
                <div class="mb-1">
                    <Label for="gifSearch">
                        What kind of GIF are you looking for? 🔍
                    </Label>
                </div>
                <Input
                    id="gifSearch"
                    type="text"
                    placeholder="E.g., cats, dancing, high five..."
                />
            </div>

            <div class="mb-4">
                <div class="mb-1">
                    <Label for="emailRecipients">
                        Who should receive this awesome GIF? ✉️
                    </Label>
                </div>
                <Input
                    id="emailRecipients"
                    type="text"
                    variant="default"
                    state="idle"
                    placeholder="email1@example.com, email2@example.com"
                />
                <div class="mt-1">
                    <HintMessage
                        type="default"
                        text="Separate multiple email addresses with commas"
                    />
                </div>
            </div>

            <div class="flex justify-center w-full">
                <Button
                    label="Send the GIF! 🚀"
                    size="default"
                    type="primary"
                    @click="handleModalVisibility"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        padding: 4rem;
    }
</style>
